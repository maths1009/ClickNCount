import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Click } from './entities/click.entity';
import { CreateClickDto } from './dto/create-click.dto';

@Injectable()
export class ClicksService {
  constructor(
    @InjectRepository(Click)
    private clicksRepository: Repository<Click>,
  ) {}

  async create(createClickDto: CreateClickDto): Promise<Click> {
    return await this.clicksRepository.save(createClickDto);
  }

  async findAll(): Promise<Click[]> {
    return this.clicksRepository.find();
  }
}
