import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Click {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ default: false })
  isAuto: boolean;

  @ApiProperty()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
