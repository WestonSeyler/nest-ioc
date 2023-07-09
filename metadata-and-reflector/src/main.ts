import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

function test() {
  function Type(type) {
    return Reflect.metadata('design:type', type);
  }
  function ParamTypes(...types) {
    return Reflect.metadata('design:paramtypes', types);
  }
  function ReturnType(type) {
    return Reflect.metadata('design:returntype', type);
  }
  @ParamTypes(String, Number)
  class Test {
    constructor(text, i) {}

    @Type(String)
    get name() {
      return 'text';
    }

    @Type(Function)
    @ParamTypes(Number, Number)
    @ReturnType(Number)
    add(x, y) {
      return x + y;
    }
  }

  const obj = new Test('test', 1);
  // Reflect.getMetadata 的 api 取出了 add 方法的参数的类型。
  const paramtypes = Reflect.getMetadata('design:paramtypes', obj, 'add');
  console.log(paramtypes);
}
test();

bootstrap();
