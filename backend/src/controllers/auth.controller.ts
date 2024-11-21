import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { HttpException, HttpStatus, HttpCode } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: { email: string; password: string }) {
    console.log("sign-in" + loginDto.email + loginDto.password);
        const validUser = await this.authService.validateUser(loginDto.email, loginDto.password);
        if(!validUser) {
            throw new HttpException('Invalid user or password', HttpStatus.UNAUTHORIZED);
        }
        return this.authService.login(validUser);
  }
}
