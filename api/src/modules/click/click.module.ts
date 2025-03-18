import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClicksGateway } from './click.gateway';
import { Click } from './entities';
import { ClicksService } from './click.service';

@Module({
  imports: [TypeOrmModule.forFeature([Click])],
  providers: [ClicksGateway, ClicksService],
})
export class ClicksModule {}
