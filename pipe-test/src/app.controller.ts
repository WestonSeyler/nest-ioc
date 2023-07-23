import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaPipe } from './aaa.pipe';

enum Ggg {
  aaa = 'aaa',
  bbb = 'bbb',
  ccc = 'ccc',
}
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //可以把他转换成整型
  getHello(
    @Query(
      'aaa',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
      }),
    )
    aaa: string,
  ): string {
    // return this.appService.getHello();
    return aaa + 1;
  }

  @Get('bb')
  //可以把他转换成浮点型
  getHello2(
    @Query('bbb', ParseFloatPipe)
    bbb: string,
  ): string {
    // return this.appService.getHello();
    return bbb + 1;
  }

  @Get('cc')
  //可以把他转换成布尔型
  getHello3(
    @Query('cc', ParseBoolPipe)
    cc: string,
  ): string {
    // return this.appService.getHello();
    return cc + 1;
  }

  @Get('ee')
  //可以把他转换成布尔型
  getHello4(
    @Query(
      'ee',
      new ParseArrayPipe({
        // items: Number,
        //指定分隔符
        separator: ',',
        optional: true,
      }),
    )
    ee: Array<number>,
  ) {
    // return this.appService.getHello();
    return ee;
    // return ee.reduce((a, b) => a + b, 0);
  }

  @Get('gg/:enum')
  gg(@Param('enum', new ParseEnumPipe(Ggg)) e: Ggg) {
    return e;
  }

  //uuid
  @Get('hh/:uuid')
  hh(@Param('uuid', new ParseUUIDPipe()) uuid: Ggg) {
    return uuid;
  }

  @Get('kkk')
  kkk(@Query('kkk', new DefaultValuePipe('aaa')) kkk: Ggg) {
    return kkk;
  }

  @Get('nnn/:bbb')
  nnn(@Query('aaa', AaaPipe) aaa: string, @Param('bbb', AaaPipe) bbb: number) {
    return aaa + bbb;
  }
}
