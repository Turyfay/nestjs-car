import { Injectable, NotFoundException } from '@nestjs/common';
import { iCar } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: iCar[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  getAllCars() {
    return this.cars;
  }
  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: iCar = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(car);

    return car;
  }
}
