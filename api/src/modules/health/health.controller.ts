import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Health check' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Health check',
  })
  getHealth(): string {
    return 'OK';
  }
}
