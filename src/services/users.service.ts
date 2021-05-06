import { Injectable, Inject } from '@nestjs/common';
import { ResponseDto } from 'src/dto/response.dto';
import { UserCreteDto } from 'src/dto/user.create.dto';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import * as bcrypt from 'bcrypt'
import { AuthDto } from 'src/dto/Auth.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: Repository<Users>,
    ) { }

    async findAll(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async createUser(userResquest: UserCreteDto): Promise<ResponseDto> {
        try {
            let hasUsername = await this.usersRepository.find({ where: { userName: userResquest.userName } })

            if (hasUsername.length > 0) {
                return <ResponseDto>{
                    success: false,
                    message: 'Username já cadastrado'
                }
            }
            let hasEmail = await this.usersRepository.find({ where: { email: userResquest.email } })

            if (hasEmail.length > 0) {
                return <ResponseDto>{
                    success: false,
                    message: 'E-mail já cadastrado'
                }
            }

            let user = new Users()
            user = {
                ...user,
                name: userResquest.name,
                userName: userResquest.userName.toLowerCase(),
                email: userResquest.email.toLowerCase(),
                password: bcrypt.hashSync(userResquest.password, 8),
                dateBorn: userResquest.dateBorn,
                height: userResquest.height,
                weight: userResquest.weight,
                imc: userResquest.imc,
                dateCreate: new Date
            }
            return await this.usersRepository.save(user)
                .then((response) => {
                    return <ResponseDto>{
                        success: true,
                        message: 'Usuario cadastrado com sucesso',
                        registers: response
                    }
                })
        }
        catch (error) {
            return <ResponseDto>{
                success: false,
                message: 'Erro interno'
            }
        }
    }
    async findOne(authResquest: AuthDto): Promise<Users | undefined> {

        let user = await this.usersRepository
            .findOne({
                where: [
                    { userName: authResquest.login, },
                    { email: authResquest.login, }
                ]
            })
        return user
    }
}