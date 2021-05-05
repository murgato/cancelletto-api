import { Module } from '@nestjs/common';
import { UsersModule } from "./users.module";
import { AuthenticateModule } from './authenticate.module'
import { MorganModule, MorganInterceptor } from "nest-morgan";
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    AuthenticateModule,
    MorganModule
  ],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: MorganInterceptor("combined"),
  }]
})

export class AppModule { }
