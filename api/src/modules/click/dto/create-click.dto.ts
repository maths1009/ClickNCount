import { ApiProperty } from '@nestjs/swagger';

export class CreateClickDto {
  @ApiProperty()
  isAuto: boolean;
}
