import { User } from '@prisma/client';
import { UserCreateDTO } from '../dtos/user-create.dto';
import { UserUpdateDTO } from '../dtos/user-update.dto';
import { UserDTO } from '../dtos/user.dto';

export abstract class UserRepository {
  abstract findAll(): Promise<UserDTO[]>;
  abstract create(data: UserCreateDTO): Promise<UserDTO>;
  abstract update(obj: UserUpdateDTO): Promise<UserDTO>;
  abstract delete(id: string): Promise<Partial<User>>;
}
