import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  getAllCars() {
    return this.carsService.getAllCars();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carsService.getCarById(id);
  }

  @Post()
  createCar(@Body() body: any) {
    return {
      ok: true,
      method: 'POST',
      body,
    };
  }

  @Patch(':id')
  updateCar(@Body() body: any, @Param('id', ParseIntPipe) id) {
    return {
      id,
      body,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id) {
    return id;
  }
}
