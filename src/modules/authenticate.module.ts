import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { AuthenticateService } from '../services/Authenticate.service'
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/const/constants';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({

    imports: [
        forwardRef(() => UsersModule),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        })
    ],
    providers: [
        AuthenticateService, LocalStrategy, JwtStrategy],
    exports: [AuthenticateService, JwtModule],
})
export class AuthenticateModule { }
