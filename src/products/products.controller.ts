import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from '../dto/createProduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @Post('')
  async createProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }
}
