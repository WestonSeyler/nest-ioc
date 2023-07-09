import { SetMetadata } from '@nestjs/common';
import { Role } from './role';

export const Roles = (...roles: Role[]) => {
  console.log(roles);
  return SetMetadata('roles', roles);
};
