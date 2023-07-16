import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

// 这样返回的 app 就会提示 fastify 平台特有的方法了
// useStaticAssets 传入这个泛型才有useStaticAssets的方法
// controller 里可以注入 fastify 的 reqeust 和 reply 对象：
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(3000);
}
bootstrap();
