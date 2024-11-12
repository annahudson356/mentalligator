import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/all')
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('by-id/:id')
    findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findOne(id);
    }

    @Get("by-email/:email")
    findOneByEmail(@Param('email') email: string): Promise<User> {
        return this.userService.findOneByEmail(email);
    }

    @Get("by-name/:name")
    findOneByName(@Param('name') name: string): Promise<User> {
        return this.userService.findOneByName(name);
    }

    @Post('/create')
    async create(@Body() user: User): Promise<{message: string}> {
        console.log("create " + user.name);
        try {
            const newUser = await this.userService.create(user);
            return { message: 'Registered!' }; 
        }
        catch (e) {
            console.error(e);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'Error creating user: ' + e.message,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('sign-in/:email/:password')
    async signIn(@Param('email') email: string, @Param('password') password: string): Promise<{message: string}> {
        console.log("sign-in" + email + password);
        const validUser = await this.userService.validate(email, password);
        if(!validUser) {
            throw new HttpException('Invalid user or password', HttpStatus.UNAUTHORIZED);
        }
        return {message: 'Logged in!'};
    }

    @Delete(':id')
    remove (@Param('id') id: number): Promise<void> {
        return this.userService.remove(id);
    }

}