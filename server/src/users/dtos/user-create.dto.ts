import { PickType } from '@nestjs/swagger';
import { UserDTO } from './user.dto';

export class UserCreateDTO extends PickType(UserDTO, [
  'name',
  'cpf',
  'email',
  'color',
  'notes',
]) {}
