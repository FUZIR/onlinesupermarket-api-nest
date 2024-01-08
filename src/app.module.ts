import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { EmployeesModule } from './employees/employees.module';
import { CustomersService } from './customers/customers.service';
import { CustomersController } from './customers/customers.controller';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [PrismaModule, ProductsModule, OrdersModule, EmployeesModule, CustomersModule],
  controllers: [AppController, ProductsController, OrdersController, EmployeesController, CustomersController],
  providers: [AppService, PrismaService, ProductsService, OrdersService, EmployeesService, CustomersService],
})
export class AppModule {}
