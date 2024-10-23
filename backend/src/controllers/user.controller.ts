import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Get(":email")
    findOneByEmail(@Param('email') email: string): Promise<User> {
        return this.userService.findOneByEmail(email);
    }

    @Get(":name")
    findOneByName(@Param('name') name: string): Promise<User> {
        return this.userService.findOneByName(name);
    }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }

    @Delete(':id')
    remove (@Param('id') id: number): Promise<void> {
        return this.userService.remove(id);
    }

}