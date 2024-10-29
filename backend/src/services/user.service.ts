import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import { find } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    findOneByName(name: string): Promise<User> {
        return this.userRepository.findOneBy({ name });
    }

    findOneByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ where: { email }});
    }

    async create(user: User): Promise<User> {
        if (await this.findOneByEmail(user.email)) {
            throw new Error("User already exists");
        }

        if (!await this.passwordValidate(user.password)) {
            throw new Error("Password must be at least 8 characters long and contain at least one letter and one number");
        }

        if (!await this.emailValidate(user.email)) {
            throw new Error("Email must be a valid ufl email");
        }

        const hashedPass = await bcrypt.hash(user.password, 10);
        const newUser = user;
        newUser.password = hashedPass;
        return this.userRepository.save(newUser);
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async validate(email: string, password: string): Promise<any> {
        const user = await this.findOneByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            console.log("User found");
            const { password, ...result } = user;
            return result;
        }
        console.log("Invalid email or password");
        return null;
    }

    async passwordValidate(password: string): Promise<boolean> {
        const regex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&#]{8,}$/);
        if (!regex.test(password)) {
            return false;
        }
        return true;
    }

    async emailValidate(email: string): Promise<boolean> {
        const regex = new RegExp(/^[A-Za-z0-9._-]+@ufl\.edu$/);
        if (!regex.test(email)) {
            return false;
        }
        return true;
    }
}