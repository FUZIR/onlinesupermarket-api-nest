import {
  BadRequestException,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Delete('/:id')
  async deleteOrderById(@Param('id', ParseIntPipe) id: number) {
    if (id <= 0) {
      throw new BadRequestException('Order with such id not found');
    } else {
      return this.ordersService.deleteOrder(id);
    }
  }
}
