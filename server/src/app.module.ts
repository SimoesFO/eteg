import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SharedModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
