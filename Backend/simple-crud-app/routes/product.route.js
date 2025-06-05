import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const ProductRouter = express.Router();

ProductRouter.get("/", getProducts);
ProductRouter.get("/:id", getProduct);

ProductRouter.post("/", createProduct);

ProductRouter.put("/:id", updateProduct);

ProductRouter.delete("/:id", deleteProduct);
export default ProductRouter;
