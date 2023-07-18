import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AaaInterceptor } from './aaa.interceptor';
//需要全局 interceptor 的，而且还用到一些 provider 做一些处理
// nest 提供了一个 token，用这个 token 在 AppModule 里声明的 interceptor，Nest 会把它作为全局 interceptor：
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AaaInterceptor,
    },
  ],
})
export class AppModule {}
