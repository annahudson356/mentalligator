import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from '../entities/log.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private logRepository: Repository<Log>,
  ) {}

    async create(user: User, mood: string, activity: string, date: Date): Promise<Log> {
    const log = new Log();
    log.user = user;
    log.mood = mood;
    log.activity = activity;
    log.date = date;
    return this.logRepository.save(log);
  }

  async remove(id: number): Promise<void> {
    await this.logRepository.delete(id);
    }

  findOne(id: number): Promise<Log> {
    return this.logRepository.findOneBy({ id });
    }
}