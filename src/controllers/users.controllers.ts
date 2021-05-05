import { Body, Controller, Get, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiTags, } from '@nestjs/swagger';
import { MorganInterceptor } from 'nest-morgan';
import { authenticateDto } from 'src/dto/authenticate.dto';
import { ResponseDto } from 'src/dto/response.dto';
import { UserCreteDto } from 'src/dto/user.create.dto';
import { Users } from 'src/entities/users.entity';
import { AuthenticateService } from 'src/services/Authenticate.service';
import { UsersService } from '../services/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthenticateService

  ) { }
  @UseInterceptors(MorganInterceptor('combined'))
  @Get('getAll')
  async getAllUsers(): Promise<Users[]> {
    return await this.usersService.findAll();
  }

  @UseInterceptors(MorganInterceptor('combined'))
  @Post('CreateUser')
  @ApiCreatedResponse({ type: ResponseDto })
  async createUser(@Body() user: UserCreteDto): Promise<ResponseDto> {
    return await this.usersService.createUser(user)
  }

  @UseInterceptors(MorganInterceptor('combined'))
  @Post('login')
  @ApiCreatedResponse({ type: authenticateDto })
  @UseGuards(AuthGuard('local'))
  async login(@Request() auth: any) {
    console.log(auth.user)
    return this.authService.login(auth.user);
  }
}
