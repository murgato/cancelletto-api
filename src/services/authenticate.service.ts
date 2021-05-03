import { Injectable, Inject } from '@nestjs/common';
import { authenticateDto } from 'src/dto/authenticate.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt'
import { ResponseDto } from 'src/dto/response.dto';

@Injectable()
export class AuthenticateService {
    constructor(private usersService: UsersService) { }

    async authenticate(authResquest: authenticateDto): Promise<ResponseDto> {

        let user = await this.usersService.findOne(authResquest)
        console.log(user)
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


}