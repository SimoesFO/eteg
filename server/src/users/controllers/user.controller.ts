import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserCreateDTO } from '../dtos/user-create.dto';
import { UserService } from '../services/user.service';
import { UserUpdateDTO } from '../dtos/user-update.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() data: UserCreateDTO) {
    return this.userService.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: UserUpdateDTO) {
    return this.userService.update({ ...data, id });
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.delete(id);
  }
}
