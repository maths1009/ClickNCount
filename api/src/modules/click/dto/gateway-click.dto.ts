import { ApiProperty } from '@nestjs/swagger';

export class ClickResponse {
  @ApiProperty()
  status: 'ok' | 'error';
}
