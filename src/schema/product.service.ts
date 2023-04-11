import { ProductDtos } from './product.dto';
/* eslint-disable */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./product.schema";

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
    
    async create(product: ProductDtos) {
        const newProduct = new this.productModel(product);
        return newProduct.save();
    }

    async readAll(): Promise<Product[]> {
        return  this.productModel.find().exec();
    }

    async readById(id) {
        return await this.productModel.findById(id).exec();
    }

    async update(id, Product: ProductDtos) {
        return await this.productModel.findByIdAndUpdate(id, Product, {new: true})
    }

    async delete(id) {
        return await this.productModel.findByIdAndRemove(id);
    }
}