import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Click {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  isAuto: boolean;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
