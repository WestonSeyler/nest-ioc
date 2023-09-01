import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private manager: EntityManager;

  @InjectRepository(User)
  private useRepository: Repository<User>;
  create(createUserDto: CreateUserDto) {
    // this.manager.save(User, createUserDto);
    // this.useRepository.find();
    this.manager.getRepository(User).save(createUserDto);
  }

  findAll() {
    return this.useRepository.find();
    // return this.manager.find(User);
  }

  findOne(id: number) {
    return this.manager.findOne(User, {
      where: { id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.manager.save(User, {
      id: id,
      ...updateUserDto,
    });
  }

  remove(id: number) {
    this.manager.delete(User, id);
  }
}