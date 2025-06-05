import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";
import ProductRouter from "./routes/product.route.js";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", ProductRouter);

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});


// delete a product

app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }

    res.status(200).json({ message: "Product Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    `mongodb+srv://admin:asdfasdf@backenddb.isfdglq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Database Connection failed!");
  });
