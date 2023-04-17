import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    itemTitle: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true,
        default: 1
    }
}, {
    timestamps: true,
})

const Item = mongoose.model("Item", ItemSchema)

export default Item;