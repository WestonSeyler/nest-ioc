import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Role } from './role';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AaaGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // return true;

    const requiredRoles = this.reflector.get<Role[]>(
      'roles',
      context.getHandler(),
    );
    // console.log(requiredRoles);
    // if (!requiredRoles) {
    //   return true;
    // } else {
    //   return false;
    // }
    const { user } = context.switchToHttp().getRequest();
    // console.log(context.switchToHttp().getRequest());
    console.log(requiredRoles);
    return requiredRoles.some((role) => user && user.roles?.includes(role));
  }
}
