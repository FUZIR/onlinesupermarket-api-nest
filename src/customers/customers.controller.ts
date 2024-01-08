import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get('/:id/orders')
  async getUserOrders(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.getUserOrders(id);
  }
}
