import { ProductController } from './product.controller';
/* eslint-disable */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { ProductService } from './schema/product.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://anhdangvien:akqHNWnbx5kclYPl@anhdangvien.izvdo.mongodb.net/?retryWrites=true&w=majority'),
            MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
