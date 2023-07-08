import {
  Controller,
  Get,
  Headers,
  Query,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { ccc } from './ccc.decorator';
import { MyHeaders } from './headers.decorator';
import { Ddd } from './ddd.decorator';

@Ddd('eee', 'test')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  @Aaa('admin')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }
  @Bbb('hello2', 'admin')
  getHello3(): string {
    return this.appService.getHello();
  }
  @Get('hello4')
  getHello4(@ccc('admin') c): string {
    return c;
  }

  @Get('hello5')
  getHello5(@Headers('Accept') headers1, @MyHeaders('accept') headers2) {
    // console.log(headers1);
    console.log(headers2);
  }

  @Get('hello6')
  getHello6(@Query('aaa') aaa) {
    console.log(aaa, 'aaa');
    // console.log(bbb);
  }
}
