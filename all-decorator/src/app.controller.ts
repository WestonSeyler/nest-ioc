import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Inject(AppService)
  // private readonly appService: AppService;
  @Optional()
  @Inject('customer')
  private readonly customer: Record<string, any>;
  constructor(@Optional() private appService: AppService) {}
  @Get()
  getHello(): string {
    console.log(this.customer);
    return this.appService.getHello();
  }
}
