import {Injectable, Logger} from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(username: string | undefined, password: string | undefined){
    Logger.debug("username and password: ", username, password);
    return {
      status: 200,
      info: 'OK'
    }
  }
}
