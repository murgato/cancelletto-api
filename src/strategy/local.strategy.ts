import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService } from '../services/Auth.service'
import { ResponseDto } from 'src/dto/response.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(login: string, password: string): Promise<ResponseDto> {
    
    const response = await this.authService.validateUser({ login, password });
    
    return response;

  }
}