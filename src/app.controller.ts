import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('app_service') private readonly appService: AppService,
    @Inject('person') private readonly person: { name: string; age: number },
    @Inject('person2') private readonly person2: { name: string; desc: number },
    @Inject('person3') private readonly person3: { name: string; desc: number },
    @Inject('person4') private readonly person4: { name: string; desc: number },
  ) {}
  // @Inject(AppService)
  // private readonly appService: AppService;

  @Get()
  getHello(): string {
    console.log(this.person4);
    return this.appService.getHello();
  }
}
