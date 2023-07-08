import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaService } from './aaa/aaa.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AaaService],
})
export class AppModule {}
