import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAuth } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  signIn(username: string, password: string): IAuth {
    if (username === 'admin' && password === '1234') {
      return {
        token: this.getJwtToken(username),
      };
    }
    throw new UnauthorizedException();
  }

  private getJwtToken(username: string): string {
    const token = this.jwtService.sign({ username });
    return token;
  }
}
