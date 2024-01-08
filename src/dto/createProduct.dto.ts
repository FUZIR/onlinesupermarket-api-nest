import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Category } from '@prisma/client';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEnum(Category)
  category: Category;
  @IsNotEmpty()
  @IsNumber()
  amount: number;
  @IsNotEmpty()
  @IsNumber()
  price: number;
}
