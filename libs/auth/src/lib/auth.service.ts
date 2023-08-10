import {Injectable, Logger} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}

  async login(username: string | undefined, password: string | undefined){
    Logger.debug("username and password: ", username, password);
    /*
    DB checking for authentication
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload ={} ADD relevant details like roles and permissions and sign JWT;
    */

    const payload = {  username: username };
    return {
      status: 200,
      info: 'OK',
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}
