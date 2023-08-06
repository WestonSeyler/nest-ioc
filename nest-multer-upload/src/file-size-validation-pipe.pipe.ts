import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // return value;
    if (value.size > 1000000) {
      throw new Error('文件大小不能超过1MB');
    }
    return value;
  }
}
