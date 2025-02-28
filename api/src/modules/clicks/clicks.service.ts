import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Click } from './entities';

@Injectable()
export class ClicksService {
  constructor(
    @InjectRepository(Click)
    private clicksRepository: Repository<Click>,
  ) {}

  async createClick(isAuto: boolean): Promise<void> {
    const click = this.clicksRepository.create({ isAuto });
    await this.clicksRepository.save(click);
  }
}
