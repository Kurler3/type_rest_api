
//////////////////////////////////////////
// CREATE PRODUCT SERVICE ////////////////
//////////////////////////////////////////

import ProductModel from "../models/product.model";
import { IProduct } from '../models/product.model';
import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';

export async function createProduct(
    input: Omit<IProduct, "createdAt" | "updatedAt">
) {
    return await ProductModel.create(input);
}

//////////////////////////////////////////
// UPDATE PRODUCT SERVICE ////////////////
//////////////////////////////////////////

export async function findAndUpdateProduct(
    query: FilterQuery<IProduct>,
    update: UpdateQuery<IProduct>,
    options: QueryOptions = {lean: true},
) {
    return ProductModel.findOneAndUpdate(query, update, options);
}

//////////////////////////////////////////
// GET PRODUCT SERVICE ///////////////////
//////////////////////////////////////////

export async function findProduct(
    query: FilterQuery<IProduct>,
    options: QueryOptions = {lean: true}
) {
    return await ProductModel.findOne(query, {}, options).lean();
}

//////////////////////////////////////////
// DELETE PRODUCT SERVICE ////////////////
//////////////////////////////////////////

export async function deleteProduct(
    query: FilterQuery<IProduct>
) {
    return await ProductModel.deleteOne(query);
}