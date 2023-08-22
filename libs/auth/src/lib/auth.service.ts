import {Injectable , UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {UsersService} from "@pro-fuel-trace-api/users";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(username: string, password: string){
    const user = await this.userService.getUser(username);
    /* DB checking for authentication*/
if(user && Object.keys(user).length) {

  // Use bcrypt's compare function to check the provided password
  const isPasswordMatching = await bcrypt.compare(password, user.password);

  if (!isPasswordMatching) {
    throw new UnauthorizedException();
  } else {
    // ADD relevant details like roles and permissions and sign JWT;
    const payload: object = {  username: user.username , role: user.role, orgName: user.orgName};
    return {
      status: 200,
      info: 'OK',
      access_token: await this.jwtService.signAsync(payload)
    }
  }
} else {
  return {
    status: 400,
    info: "User not exist"
  }
}
  }

  /**
   * function to create user while signing up
   * @param username
   * @param password
   * @param orgName
   */
  async signUp(username:string,password:string,orgName:string){
    return await this.userService.createUser(username, password,orgName);
  }
}
