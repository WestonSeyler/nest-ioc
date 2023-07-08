import { Controller, SetMetadata, applyDecorators } from '@nestjs/common';

//在外面包一层路径
export const Ddd = (path, metadata) => {
  return applyDecorators(Controller(path), SetMetadata('ddd', metadata));
};
