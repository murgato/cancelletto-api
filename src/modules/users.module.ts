import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controllers';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from '../providers/users.providers';
import { UsersService } from '../services/users.service';
import { AuthModule } from './Auth.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule
  ],

  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService,
  ],
  exports: [UsersService, UsersModule]
})
export class UsersModule { }