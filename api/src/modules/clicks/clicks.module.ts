import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClicksGateway } from './clicks.gateway';
import { Click } from './entities';
import { ClicksService } from './clicks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Click])],
  providers: [ClicksGateway, ClicksService],
})
export class ClicksModule {}
