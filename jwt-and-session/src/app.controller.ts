import { Controller, Get, Inject, Res, Session, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sss')
  sss(@Session() session): string {
    console.log(session);
    session.count = session.count ? session.count + 1 : 1;
    return session.count;
  }

  @Get('ttt')
  ttt(
    @Headers('authorization') authorization: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    if (authorization) {
      try {
        const token = authorization.split(' ')[1];
        //做一次校验
        const data = this.jwtService.verify(token);
        const newToken = this.jwtService.sign({
          code: data.count + 1,
        });
        //生成一个新的token
        response.setHeader('token', newToken);
        return data.count + 1;
      } catch (error) {}
      // console.log(authorization, '1111');
    } else {
      const newToken = this.jwtService.sign({
        count: 1,
      });
      response.setHeader('token', newToken);
      return 'hello';
    }
  }
}
