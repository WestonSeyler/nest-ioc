import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { AaaException } from './AaaException';

//捕获异常
@Catch()
export class AaaFilter<T> implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    // debugger;
    if (host.getType() == 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      response.status(200).json({
        aaa1: exception.aaa,
        bb2: exception.bbb,
      });
    } else if (host.getType() == 'ws') {
      return;
    } else host.getType() === 'rpc';
    {
      return;
    }
  }
}
