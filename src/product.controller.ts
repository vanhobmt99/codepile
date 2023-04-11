import { ProductDtos } from './schema/product.dto';
/* eslint-disable */
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Product } from "./schema/product.schema";
import { ProductService } from "./schema/product.service";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Post()
    @UsePipes(new ValidationPipe({ skipMissingProperties: false }))
    async createProduct(@Res() response, @Body() product: ProductDtos) {
        const newProduct = await this.productService.create(product);
        return response.status(HttpStatus.CREATED).json({
            newProduct
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const products = await this.productService.readAll();
        return response.status(HttpStatus.OK).json({
            products
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const product = await this.productService.readById(id);
        return response.status(HttpStatus.OK).json({
            product
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() product: Product) {
        const updatedProduct = await this.productService.update(id, product);
        return response.status(HttpStatus.OK).json({
            updatedProduct
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedProduct = await this.productService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedProduct
        })
    }
}