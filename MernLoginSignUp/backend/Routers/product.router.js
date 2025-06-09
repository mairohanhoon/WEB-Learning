import express from "express";
import { productValidation } from "../Middlewares/product.validation.js";

const productRouter = express.Router();

productRouter.get("/",productValidation, (req, res) => {
    console.log('---login user details---', req.user);
    
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 50000
        }
    ])
});

export default productRouter;
