import { Injectable } from '@nestjs/common';
import { authenticateDto } from 'src/dto/authenticate.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt'
import { ResponseDto } from 'src/dto/response.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticateService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async authenticate(authResquest: authenticateDto): Promise<ResponseDto> {

        let user = await this.usersService.findOne(authResquest)
        if (user && bcrypt.compareSync(authResquest.password, user.password)) {
            return <ResponseDto>{
                success: true,
                message: 'Usuario logado com sucesso',
                registers: {
                    userName: user.userName,
                    email: user.email,
                    password: user.password
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
      //  const payload = { username: user.username, sub: user.userId };
      //  let token = this.jwtService.sign(payload)
        return {
            success: true,
            message: '',
            contains: {
                //access_token: token
            },
        };
    }

}