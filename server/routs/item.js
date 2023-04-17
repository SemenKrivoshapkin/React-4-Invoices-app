import { Router } from "express";
import Item from "../models/item.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const {
            name,
            minPrice,
            maxPrice
        } = req.query;

        const pipeline = [];

        if (name) {
            pipeline.push({
                $match: {
                    name: {
                        $regex: name,
                        $options: "i"
                    }
                }
            })
        }


        if (minPrice) {
            pipeline.push({
                $match: {
                    price: {
                        $gte: Number(minPrice)
                    }
                   
                }
            })
        }

        if (maxPrice) {
            pipeline.push({
                $match: {
                    price: {
                        $lte: Number(maxPrice)
                    }
                    
                }
            })
        }

        if (pipeline.length > 0) {
            const items = await Invoice.aggregate(pipeline)
            return res.status(200).send(items)
        }

        const items = await Item.find()
        res.status(200).send(items)
    } catch (error) {
        console.log(error)
        
    }
});

router.get("/:id", async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        res.status(200).send(item)
    } catch (error) {
        console.log(error)
        
    }
})

router.post("/", async (req, res) => {
   try {
    const { name, quantity, price } =req.body;
    const item = new Item({
        name,
        quantity,
        price
    })

    const result = await item.save()
    res.status(201).json({ result })
   } catch (error) {
    res.status(400).json({ error })
   }

});

router.delete("/:id", async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        res.status(200).send(item);
    } catch (error) {
        console.log(error)
        
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { name, quantity, price } = req.body;
        const item = await Item.findByIdAndUpdate(
            req.params.id, 
            {
                name,
                quantity,
                price 
            }
        );
        if (!item) {
            res.status(404).send("No item found");
        }
        res.status(200).send(item)
    } catch (error) {
        console.log(error)
        
    }
});





export default router;