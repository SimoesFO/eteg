import { Injectable, Logger } from '@nestjs/common';
import { UserCreateDTO } from '../dtos/user-create.dto';
import { UserRepository } from '../repositories/user.repository';
import { UserUpdateDTO } from '../dtos/user-update.dto';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  private readonly logger = new Logger(UserService.name);

  async findAll() {
    return this.repository.findAll();
  }

  async create(data: UserCreateDTO) {
    return this.repository.create(data);
  }

  async update(data: UserUpdateDTO) {
    return this.repository.update(data);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
