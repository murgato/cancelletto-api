import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticateService } from '../services/authenticate.service'
import { authenticateDto } from 'src/dto/authenticate.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticateService) {
    super();
  }

  async validate(login: string, password: string): Promise<any> {
  
    let Request: authenticateDto = {
      login: login,
      password: password
    }
  
    const response = await this.authService.authenticate(Request);
    if (!response.success) {
      throw new UnauthorizedException();
    }
    return response;
  }
}