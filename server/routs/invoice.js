import { Router } from "express";
import Invoice from "../models/invoice.js";
import Item from "../models/item.js";
import JWT from "../models/jwt.js";


const router = Router();

router.get("/", async (req, res) => {
    try {
        const token = req.headers.authorization
        const jwt = await JWT.find({accessToken: token})
        const tokenExpirationDate = new Date(jwt[0].expirationDue)
        const nowDate = new Date(Date.now())
        if (!token || !jwt.length || nowDate > tokenExpirationDate) return res.status(403).send("Access denied")
        
        //jwt is expired





        const {
            title,
            status,
            // minAmountDue,
            // maxAmountDue
        } = req.query;

        const pipeline = [];

        if (title) {
            pipeline.push({
                $match: {
                    title: {
                        $regex: title,
                        $options: "i"
                    }
                }
            })
        }

        if (status) {
            pipeline.push({
                $match: {
                    status: status
                }
            })
        }

        // if (minAmountDue) {
        //     pipeline.push({
        //         $match: {
        //             amountDue: {
        //                 $gte: Number(minAmountDue)
        //             }
                   
        //         }
        //     })
        // }

        // if (maxAmountDue) {
        //     pipeline.push({
        //         $match: {
        //             amountDue: {
        //                 $lte: Number(maxAmountDue)
        //             }
                    
        //         }
        //     })
        // }

        if (pipeline.length > 0) {
            const invoices = await Invoice.aggregate(pipeline).populate("items")
            return res.status(200).send(invoices)
        }

        const invoices = await Invoice.find().populate("items")
        res.status(200).send(invoices)
    } catch (error) {
        console.log(error)
        
    }
});

router.get("/:id", async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id).populate("items")
        res.status(200).send(invoice)
    } catch (error) {
        console.log(error)
        
    }
})

router.post("/", async (req, res) => {
   try {
    const { title, email, dueDate, billFrom, billTo, description, status, items} =req.body;
    const invoice = new Invoice({
        title,
        email,
        dueDate,
        billFrom,
        billTo,
        description,
        status,
        items
    })

    const result = await invoice.save()
    res.status(201).json({ result })
   } catch (error) {
    res.status(400).json({ error })
   }

});

router.delete("/:id", async (req, res) => {
    try {
        const invoice = await Invoice.findByIdAndDelete(req.params.id);
        res.status(200).send(invoice);
    } catch (error) {
        console.log(error)
        
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { title, email, dueDate, billFrom, billTo, description, status, items } = req.body;
        const invoice = await Invoice.findByIdAndUpdate(
            req.params.id, 
            {
                    title,
                    email,
                    dueDate,
                    billFrom,
                    billTo,
                    description,
                    status,
                    items
            }
        );
        if (!invoice) {
            res.status(404).send("No invoice found");
        }
        res.status(200).send(invoice)
    } catch (error) {
        console.log(error)
        
    }
});

router.put("/:id/item", async (req, res) => {
    try {
        const { itemTitle, quantity, price } = req.body;
        const newItem = new Item({
            itemTitle,
            quantity,
            price
        })

        const invoice = await Invoice.findById(req.params.id)
        invoice.items.push(newItem)
        await invoice.save()
        res.status(200).send(invoice)

    } catch (error) {
        console.log(error)
    }
})

router.patch("/:id/status", async (req, res) => {
    try {
      const { status } = req.body;
      if (!status) {
        return res.status(400).send({ error: "Status is required" });
      }
      const invoice = await Invoice.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true } // Return the updated document
      );
      if (!invoice) {
        return res
          .status(404)
          .send(`An invoice with ID ${req.params.id} had not been found`);
      }
      res.status(200).send(invoice);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });





export default router;