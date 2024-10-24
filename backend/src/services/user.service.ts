import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

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
        return this.userRepository.findOneBy({ email });
    }

    async create(user: User): Promise<User> {
        const hashedPass = await bcrypt.hash(user.password, 10);
        const newUser = user;
        newUser.password = hashedPass;
        return this.userRepository.save(newUser);
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async validate(name: string, password: string): Promise<any> {
        const user = await this.userRepository.findOne({where: {name}});
        if (user && await bcrypt.compare(password, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}