
import {
    Router
} from "express";

import {
    createProductHandler,
    updateProductHandler,
    getProductHandler,
    deleteProductHandler,
} from "../controller/product.controller";
import validate from "../middleware/validateResource.middleware";
import { createProductSchema, updateProductSchema, getDeleteProductSchema } from '../schema/product.schema';

const productRouter = Router({mergeParams: true});

///////////////////////
// CREATE PRODUCT /////
///////////////////////

productRouter.post("/create", validate(createProductSchema), createProductHandler);

///////////////////////
// UPDATE PRODUCT /////
///////////////////////

productRouter.patch("/update", validate(updateProductSchema), updateProductHandler);

///////////////////////
// GET PRODUCT ////////
///////////////////////

productRouter.get("/get/:productId", validate(getDeleteProductSchema), getProductHandler);

///////////////////////
// DELETE PRODUCT /////
///////////////////////

productRouter.delete("/delete/:productId", validate(getDeleteProductSchema), deleteProductHandler);

///////////////////////
// EXPORT ROUTER //////
///////////////////////

export default productRouter;