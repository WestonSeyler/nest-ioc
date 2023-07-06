import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './customer';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    Customer,
    // {
    //   provide: 'customer',
    //   useFactory() {
    //     return {
    //       name: 'customer',
    //     };
    //   },
    // },
  ],
})
export class AppModule {}
