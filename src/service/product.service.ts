
//////////////////////////////////////////
// CREATE PRODUCT SERVICE ////////////////
//////////////////////////////////////////

import ProductModel from "../models/product.model";
import { IProduct } from '../models/product.model';
import { FilterQuery } from 'mongoose';

export async function createProduct(
    input: Omit<IProduct, "createdAt" | "updatedAt">
) {
    return await ProductModel.create(input);
}

//////////////////////////////////////////
// UPDATE PRODUCT SERVICE ////////////////
//////////////////////////////////////////

export async function updateProduct(

) {

}

//////////////////////////////////////////
// GET PRODUCT SERVICE ///////////////////
//////////////////////////////////////////

export async function findProduct(
    query: FilterQuery<IProduct>
) {
    return await ProductModel.find(query).lean();
}

//////////////////////////////////////////
// DELETE PRODUCT SERVICE ////////////////
//////////////////////////////////////////

export async function deleteProduct() {
    
}