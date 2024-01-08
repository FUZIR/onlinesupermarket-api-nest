import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from '../dto/createProduct.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(dto: CreateProductDto) {
    await this.prisma.product.create({
      data: {
        name: dto.name,
        category: dto.category,
        amount: dto.amount,
        price: dto.price,
      },
    });
  }
}
