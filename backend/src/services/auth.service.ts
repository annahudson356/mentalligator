import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity'
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { MailService } from './mail.service'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    private userService: UserService,
    private mailService: MailService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
        console.log("User found");
        const { password, ...result } = user;
        return result;
    }
    if (!user.isEmailConfirmed) {
      console.log("Email not confirmed");
      return null;
    }
    console.log("Invalid email or password");
    return null;
}

async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

async generateConfirmationToken(email: string): Promise<string> {
    const payload = { email };
    return this.jwtService.sign(payload, { expiresIn: '1h' }); 
  }

async sendConfirmationEmail(email: string, token: string): Promise<void> {
    const confirmationUrl = `http://localhost:3000/auth/confirm?token=${token}`;
    const htmlContent = `
      <h1>Confirm Your Email</h1>
      <p>Click the link below to confirm your email:</p>
      <a href="${confirmationUrl}">Confirm Email</a>
    `;
    await this.mailService.sendMail(
      email,
     'Email Confirmation',
      'Please confirm your email.' +
      htmlContent
    );
  }

}
