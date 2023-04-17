import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    billFrom: {
        address: mongoose.Schema.Types.String,
        city: mongoose.Schema.Types.String,
        postCode: mongoose.Schema.Types.String,
        country: mongoose.Schema.Types.String,
    },
    billTo: {
        address: mongoose.Schema.Types.String,
        city: mongoose.Schema.Types.String,
        postCode: mongoose.Schema.Types.String,
        country: mongoose.Schema.Types.String,
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    items: [
        {
            itemTitle: mongoose.Schema.Types.String,
            price: mongoose.Schema.Types.Number,
            quantity: mongoose.Schema.Types.Number
        }
    ]
}, {
    timestamps: true,
})

const Invoice = mongoose.model("Invoice", InvoiceSchema)

export default Invoice;