import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaFilter } from './aaa.filter';
import { AaaException } from './AaaException';
import { AaaGuard } from './aaa.guard';
import { Roles } from './roles.decorator';
import { Role } from './role';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //捕获异常
  @UseFilters(AaaFilter)
  //守卫
  @UseGuards(AaaGuard)
  //权限的管理
  @Roles(Role.USER)
  getHello(): string {
    throw new AaaException('aaa', 'bbb');
    // return this.appService.getHello();
  }
}
