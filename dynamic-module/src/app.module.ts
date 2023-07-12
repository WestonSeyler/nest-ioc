import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BbbModule } from './bbb/bbb.module';
import { CccModule } from './ccc/ccc.module';

@Module({
  imports: [
    BbbModule.register({ a: 1, b: 2 }),
    // CccModule.register({ aaa: 1, bbb: '2' }),
    //异步写法
    // CccModule.registerAsync({
    //   useFactory: async () => {
    //     await 111;
    //     return {
    //       aaa: 222,
    //       bbb: 'bbb',
    //     };
    //   },
    // }),

    CccModule.register({ aaa: 1, bbb: '2222', isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
