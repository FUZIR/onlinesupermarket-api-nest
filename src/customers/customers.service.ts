import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}
  async getUserOrders(id: number) {
    const orders = await this.prisma.order.findMany({
      where: {
        customer_id: id,
      },
      include: {
        orderProduct: {
          include: {
            product: true,
          },
        },
      },
    });
    if (!orders.length) {
      throw new BadRequestException('Customer with such id not found');
    } else {
      await orderSum(orders);
      const totalSum = await calculateTotalSum(orders);
      return { orders, totalSum };
    }
    async function orderSum(orders) {
      orders.forEach((order) => {
        let orderSum = 0;
        order.orderProduct.forEach((product) => {
          const amount = product.amount;
          const price = parseFloat(product.product.price);
          if (amount && price) {
            orderSum += amount * price;
          }
          return (order.orderSum = orderSum + parseFloat(order.delivery_cost));
        });
      });
    }
    async function calculateTotalSum(orders) {
      let totalSum = 0;
      orders.forEach((order) => {
        totalSum += order.orderSum;
      });
      return (orders.totalSum = totalSum);
    }
  }
}
