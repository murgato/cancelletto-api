import { Module } from '@nestjs/common';
import { UsersModule } from "./users.module";
import { AuthModule } from './Auth.module'
import { MorganModule, MorganInterceptor } from "nest-morgan";
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MorganModule
  ],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: MorganInterceptor("combined"),
  }]
})

export class AppModule { }
