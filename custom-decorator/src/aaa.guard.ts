import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import e from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AaaGuard implements CanActivate {
  @Inject(Reflector)
  private reflector: Reflector;
  // guard 里使用 reflector 来取 metadata：
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log(this.reflector.get('ddd', context.getClass()));
    // console.log(this.reflector.get('ddd', context.getHandler()));
    const role = this.reflector.get('aaa', context.getHandler());
    if (role.includes('admin')) {
      return true;
    } else {
      return false;
    }
    // return true;
  }
}
