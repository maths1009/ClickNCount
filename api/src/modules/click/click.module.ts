import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClicksGateway } from './click.gateway';
import { Click } from './entities/click.entity';
import { ClicksService } from './click.service';
import { ClickController } from './click.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Click])],
  providers: [ClicksGateway, ClicksService],
  controllers: [ClickController],
})
export class ClicksModule {}
