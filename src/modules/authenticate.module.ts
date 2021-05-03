import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { AuthenticateService } from '../services/Authenticate.service'
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategy/local.strategy';
@Module({

    imports: [UsersModule, PassportModule],
    providers: [AuthenticateService, LocalStrategy]

})
export class AuthenticateModule { }
