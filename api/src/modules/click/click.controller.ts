import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ClicksService } from './click.service';
import { Click } from './entities/click.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ErrorResponse } from 'src/common/interfaces/errorResponse.interface';

@Controller()
export class ClickController {
  constructor(private readonly appService: ClicksService) {}

  @Get('clicks')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all clicks' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The list of all clicks',
    type: Click,
    isArray: true,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
    type: ErrorResponse,
  })
  async findAll(): Promise<Click[]> {
    try {
      return await this.appService.findAll();
    } catch {
      throw new HttpException(
        "Couldn't get clicks",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
