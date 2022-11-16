import { IsOptional, IsString, IsUUID } from 'class-validator';
export class UpdateCarDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsOptional()
  readonly brand?: string;

  @IsOptional()
  readonly model?: string;
}
