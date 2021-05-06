import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/dto/Auth.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt'
import { ResponseDto } from 'src/dto/response.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(authResquest: AuthDto): Promise<ResponseDto> {

        let user = await this.usersService.findOne(authResquest)
        if (user && bcrypt.compareSync(authResquest.password, user.password)) {
            return <ResponseDto>{
                success: true,
                message: 'Usuario logado com sucesso',

                contains: {
                    registers: {
                        userName: user.userName,
                        email: user.email,
                        password: user.password
                    }
                }
            }
        } else {
            return <ResponseDto>{
                success: false,
                message: 'Senha ou e-mail incorretos'
            }
        }
    }
    async login(user: any): Promise<ResponseDto> {
        const payload = {
            username: user.username,
            email: user.email,
            password: user.password
        };
        
        let token = this.jwtService.sign(payload)
        return {
            success: true,
            message: '',
            contains: {
                access_token: token
            },
        };
    }

}