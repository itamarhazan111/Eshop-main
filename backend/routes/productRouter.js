import express from "express";
import {getProducts,getProductById,getProductByToken, getCategories, getProductsByQuery} from "../controllers/productController.js";
import expressAsyncHandler from 'express-async-handler'

const productRouter=express.Router();

productRouter.get('/',expressAsyncHandler(getProducts));
productRouter.get('/search',expressAsyncHandler(getProductsByQuery))
productRouter.get('/categories',expressAsyncHandler(getCategories));
;
productRouter.get('/:id',expressAsyncHandler(getProductById));
productRouter.get('/token/:token',expressAsyncHandler(getProductByToken));





export default productRouter;