import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class Customer {
  constructor(private appService: AppService) {}
}
