import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from 'src/controllers/users.controllers';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from '../providers/users.providers';
import { UsersService } from '../services/users.service';
import { AuthenticateModule } from './authenticate.module';

@Module({
  imports: [
    DatabaseModule,
    AuthenticateModule
  ],

  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService,
  ],
  exports: [UsersService, UsersModule]
})
export class UsersModule { }