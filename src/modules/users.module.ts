import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controllers';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from '../providers/users.providers';
import { UsersService } from '../services/users.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService,
  ],
  exports: [UsersService]
})
export class UsersModule { }