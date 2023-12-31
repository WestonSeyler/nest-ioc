import {
  Controller,
  Get,
  SetMetadata,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { AaaInterceptor } from './aaa.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AaaGuard)
  @UseInterceptors(AaaInterceptor)
  @SetMetadata('role', ['admin'])
  getHello(): string {
    return this.appService.getHello();
  }
}
