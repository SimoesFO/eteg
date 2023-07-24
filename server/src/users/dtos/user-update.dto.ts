import { PartialType } from '@nestjs/swagger';
import { UserDTO } from './user.dto';

export class UserUpdateDTO extends PartialType(UserDTO) {}
