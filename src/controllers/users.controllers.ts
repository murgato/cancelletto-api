import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse, ApiTags, } from '@nestjs/swagger';
import { authenticateDto } from 'src/dto/authenticate.dto';
import { ResponseDto } from 'src/dto/response.dto';
import { UserCreteDto } from 'src/dto/user.create.dto';
import { Users } from 'src/entities/users.entity';
import { UsersService } from '../services/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('getAll')
  async getAllUsers(): Promise<Users[]> {
    return await this.usersService.findAll();
  }
  @Post('CreateUser')
  @ApiCreatedResponse({ type: ResponseDto })
  async createUser(@Body() user: UserCreteDto): Promise<ResponseDto> {
    return await this.usersService.createUser(user)
  }

  @Post('login')
  @ApiCreatedResponse({ type: authenticateDto })
  @UseGuards(AuthGuard('local'))
  async login(@Request() auth: any) {
   return auth.user
  }
}
