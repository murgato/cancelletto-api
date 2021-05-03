import { Module } from '@nestjs/common';
import { UsersModule } from "./users.module";
import {AuthenticateModule} from './authenticate.module'
@Module({
  imports: [
    UsersModule,
    AuthenticateModule
  ],
})

export class AppModule { }
