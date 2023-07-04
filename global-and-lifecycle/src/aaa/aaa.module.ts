import { Global, Module } from '@nestjs/common';
import { AaaService } from './aaa.service';
import { AaaController } from './aaa.controller';
// 每个模块import太麻烦 所以可以使用global来代替 这样不用导入aaa.service
// b模块 import=[]
// 不过全局模块还是尽量少用，不然注入的很多 provider 都不知道来源，会降低代码的可维护性。
@Global()
@Module({
  controllers: [AaaController],
  providers: [AaaService],
  exports: [AaaService],
})
export class AaaModule {}
