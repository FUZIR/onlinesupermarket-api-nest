import { Body, Controller, Param, ParseIntPipe, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { UpdateEmployeeDto } from '../dto/updateEmployee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}
  @Put('/:id')
  async updateEmployer(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.employeesService.updateEmployee(id, dto);
  }
}
