import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AaaInterceptor } from './aaa.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局的interceptor 没法注入依赖 可以在provider里面注入

  // app.useGlobalInterceptors(new AaaInterceptor());

  await app.listen(3000);
}
bootstrap();
