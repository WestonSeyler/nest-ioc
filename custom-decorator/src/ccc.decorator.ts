import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ccc = createParamDecorator((data, ctx: ExecutionContext) => {
  console.log(data, ctx.switchToHttp().getResponse());
  return 'ccc';
});
