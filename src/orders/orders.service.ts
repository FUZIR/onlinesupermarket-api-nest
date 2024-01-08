import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}
  async deleteOrder(id: number) {
    await this.prisma.order.delete({ where: { id } });
  }
}
