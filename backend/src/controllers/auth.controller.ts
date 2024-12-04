import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service'
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, 
    private readonly userService: UserService,
    private readonly jwtService: JwtService) {}


  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: { email: string; password: string }) {
    console.log("sign-in" + loginDto.email + loginDto.password);
        const validUser = await this.authService.validateUser(loginDto.email, loginDto.password);
        if(!validUser) {
            throw new HttpException('Invalid/uncomfirmed user or password', HttpStatus.UNAUTHORIZED);
        }
        return this.authService.login(validUser);
  }

  @Post('register')
  async register(@Body() user: User) {
    try {
      const newUser = await this.userService.create(user);
      const token = await this.authService.generateConfirmationToken(user.email);
      await this.authService.sendConfirmationEmail(user.email, token);
      return { message: 'User registered successfully. Please check your email to confirm your account.' };
    }
    catch (e) {
      console.error(e);
      throw new HttpException("Error creating user:" + e.message || 'Registration failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('confirm')
async confirmEmail(@Query('token') token: string): Promise<{ message: string }> {
  try {
    const decoded = this.jwtService.verify(token);
    const email = decoded.email;

    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    if (user.isEmailConfirmed) {
      return { message: 'Email already confirmed.' };
    }
    user.isEmailConfirmed = true;
    await this.userService.update(user);
    const accessToken = await this.authService.login(user);

    return { message: 'Email confirmed successfully!' };
  } catch (error) {
    console.error('Error confirming email:', error);
    throw new HttpException('Invalid or expired token', HttpStatus.BAD_REQUEST);
  }
}
}
