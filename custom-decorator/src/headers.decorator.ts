import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const MyHeaders = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    console.log(request.headers['accept']);
    return key ? request.headers[key] : request.headers;
  },
);
