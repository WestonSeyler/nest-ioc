import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateCccDto } from './dto/create-ccc.dto';
import { UpdateCccDto } from './dto/update-ccc.dto';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class CccService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    OnApplicationShutdown
{
  constructor(private readonly moduleRef: ModuleRef) {}
  onModuleDestroy() {
    console.log(`CccController OnModuleDestroy`);
  }
  onApplicationShutdown(signal?: string) {
    console.log(`CccController OnApplicationShutdown${signal}`);
    // onApplicationShutdown 的生命周期里，拿到当前模块的引用，调用 get 方法，传入 token，取出对应的 provider 实例，然后调用它的方法。
    const cccService = this.moduleRef.get<CccService>(CccService);
    console.log('-----------------------', cccService.findAll());
  }
  onModuleInit() {
    console.log(`CccService init`);
  }
  onApplicationBootstrap() {
    console.log(`CccService bootstrap`);
  }
  create(createCccDto: CreateCccDto) {
    return 'This action adds a new ccc';
  }

  findAll() {
    return `This action returns all ccc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ccc`;
  }

  update(id: number, updateCccDto: UpdateCccDto) {
    return `This action updates a #${id} ccc`;
  }

  remove(id: number) {
    return `This action removes a #${id} ccc`;
  }
}
