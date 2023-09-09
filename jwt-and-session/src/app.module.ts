import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // JwtModule.register({
    //   secret: 'aaaa',
    //   signOptions: {
    //     expiresIn: '7d',
    //   },
    // }),
    JwtModule.registerAsync({
      async useFactory() {
        await 1111;
        return {
          secret: 'aaaaa',
          signOptions: {
            expiresIn: '7d', //设置日期为7天
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
