import { Controller, Get } from '@nestjs/common';
import { ClicksService } from './click.service';
import { Click } from './entities';

@Controller()
export class ClickController {
  constructor(private readonly appService: ClicksService) {}

  @Get('clicks')
  getClicks(): Promise<Click[]> {
    return this.appService.getClicks();
  }
}
