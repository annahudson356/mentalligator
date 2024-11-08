import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('date')
  date: Date;
    
  @Column()
  mood: string;

    @Column()
  activity: string;

  @ManyToOne(() => User, (user) => user.logs, { onDelete: 'CASCADE' })
  user: User;
}