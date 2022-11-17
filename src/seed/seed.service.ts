import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}
  runSeed() {
    this.carsService.fillCarsWithSeedDate(CARS_SEED);
    this.brandsService.fillBrandWithSeedDate(BRANDS_SEED);
    return 'seed execute successfully';
  }
}
