import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Log } from './log.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    email: string;
    
    @Column()
    password: string;

    @OneToMany(() => Log, (log) => log.user)
    logs: Log[];
}