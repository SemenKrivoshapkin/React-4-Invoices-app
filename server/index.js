import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
import invoiceRoutes from "./routs/invoice.js"
import itemRoutes from "./routs/item.js"
import authRouter from "./routs/auth.js";
import registerRouter from "./routs/register.js";

const app = express();
const url = "mongodb+srv://cemehykt:l3YvtWn8PjCVXqew@cluster0.qmo0lks.mongodb.net/invoices-app";
app.use(cors())



app.use(express.json())

app.use("/invoices", invoiceRoutes)

app.use("/items", itemRoutes)

app.use("/login", authRouter)

app.use('/register', registerRouter)

mongoose.connect(url)
  .then(() => {
    console.log("Connected successfully to server");
    
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch(err => {
    console.log("Error connecting to MongoDB:", err);
  });