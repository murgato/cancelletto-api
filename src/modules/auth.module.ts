import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { AuthService } from '../services/auth.service'
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/const/constants';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { AuthControllers } from 'src/controllers/auth.controllers';

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
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    exports: [
        AuthService,
        JwtModule],
        
    controllers: [AuthControllers]
})
export class AuthModule { }
