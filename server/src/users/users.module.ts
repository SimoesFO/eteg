import { Module } from '@nestjs/common';
import { PrismaUserRepository } from './repositories/prisma/prisma-user.repository';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

const _UserRepository = {
  provide: UserRepository,
  useClass: PrismaUserRepository,
};

@Module({
  imports: [],
  controllers: [UserController],
  providers: [_UserRepository, UserService],
})
export class UsersModule {}
