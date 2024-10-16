import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LogService } from '../services/log.service';
import { Log } from '../entities/log.entity';

@Controller('logs')
export class LogController {
    constructor(private readonly logService: LogService) {}


    @Get(':id')
    findOne(@Param('id') id: number): Promise<Log> {
        return this.logService.findOne(id);
    }

    @Post()
    create(@Body() log: Log): Promise<Log> {
        return this.logService.create(log.user, log.mood, log.activity, log.date);
    }

    @Delete(':id')
    remove (@Param('id') id: number): Promise<void> {
        return this.logService.remove(id);
    }
}