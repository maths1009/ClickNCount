import { ApiProperty } from '@nestjs/swagger';

export class ClickPayload {
  @ApiProperty()
  isAuto: boolean;
}

export class ClickResponse {
  status: 'ok' | 'error';
}
