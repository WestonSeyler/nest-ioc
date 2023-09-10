import {
  Controller,
  Post,
  Body,
  Inject,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginGuard } from 'src/login.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Inject(JwtService)
  private readonly jwtService: JwtService;
  @Post('login')
  @UseGuards(LoginGuard)
  async login(
    @Body(ValidationPipe) user: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    // console.log(user);
    const foundUser = await this.userService.login(user);

    if (foundUser) {
      const token = await this.jwtService.sign({
        user: {
          id: foundUser.id,
          username: foundUser.username,
        },
      });
      res.setHeader('token', token);
      return 'login success';
    } else {
      return 'login fail';
    }
  }

  @Post('register')
  register(@Body(ValidationPipe) user: RegisterDto) {
    // console.log(user);
    return this.userService.register(user);
  }
}
