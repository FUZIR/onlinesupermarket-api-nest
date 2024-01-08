import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateEmployeeDto } from '../dto/updateEmployee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}
  async updateEmployee(id: number, dto: UpdateEmployeeDto) {
    await this.prisma.employer.update({
      where: { id },
      data: {
        first_name: dto.firstName,
        last_name: dto.lastName,
        middle_name: dto.middleName,
        position: dto.position,
      },
    });
  }
}
