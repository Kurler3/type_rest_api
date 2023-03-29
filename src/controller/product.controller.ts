import {
    Request,
    Response,
} from "express";
import { createProduct, deleteProduct, findAndUpdateProduct, findProduct } from "../service/product.service";

export async function createProductHandler(
    req: Request,
    res: Response,
) {
    try {

        const body = req.body;

        const newProduct = await createProduct(body);

        return res.status(200).json(newProduct);

    } catch (error) {
        
        console.error("Error: ", error);

        return res.status(400).json({
            message: error,
        });

    }
}

export async function updateProductHandler(
    req: Request,
    res: Response,
) {
    try {

        const body = req.body;

        const productId = req.params.productId;

        const updatedProduct = await findAndUpdateProduct({productId: productId}, body);

        return res.send(updatedProduct);

    } catch (error) {
        console.error("Error: ", error);

        return res.status(400).json({
            message: error,
        });
    }
}

export async function getProductHandler(
    req: Request,
    res: Response,
) {
    try {

        const productId = req.params.productId;

        const product = await findProduct({_id: productId});

        return res.send(product);

    } catch (error) {
        console.error("Error: ", error);

        return res.status(400).json({
            message: error,
        });
    }
}   

export async function deleteProductHandler(
    req: Request,
    res: Response,
) {
    try {

        const productId = req.params.productId;

        await deleteProduct({_id: productId});

        return res.send("Product deleted successfully!")

    } catch (error) {
        console.error("Error: ", error);

        return res.status(400).json({
            message: error,
        });
    }
}