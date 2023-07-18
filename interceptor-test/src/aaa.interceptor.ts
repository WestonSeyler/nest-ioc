import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { AppService } from './app.service';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  // 注意: 全局的不能注入依赖  局部导入interceptor的可以
  constructor(private appService: AppService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(this.appService.getHello());
    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log(`After ${Date.now() - now}ms`);
      }),
    );
  }
}
