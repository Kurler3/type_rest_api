import mongoose from "mongoose";
import { IUser } from "./user.model";
import { HydratedDocument } from 'mongoose';


export interface IProduct {
    user: HydratedDocument<IUser>['_id'];
    title: string;
    description: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
};

const productSchema = new mongoose.Schema<IProduct>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const ProductModel = mongoose.model<IProduct>("Product", productSchema);

export default ProductModel;