import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  Observable,
  TimeoutError,
  catchError,
  throwError,
  timeout,
} from 'rxjs';
// 延迟的处理
@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(3000),
      // 超时直接抛出异常
      catchError((err) => {
        if (err instanceof TimeoutError) {
          // return throwError(() => new RequestTimeoutException());
          return throwError(() => new HttpException('请求响应异常', 408));
        }
        return throwError(() => err);
      }),
    );
  }
}
