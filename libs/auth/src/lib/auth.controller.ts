import {Body, Controller , Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {LoginDto, SignUpDto} from "@pro-fuel-trace-api/data-transfer-object";

@ApiTags('Auth')
@Controller()
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}
  @Post('login')
  login(@Body() bodyParams: LoginDto){
    return this.authService.login(bodyParams.username, bodyParams.password);
  }

  /**
   * post method for sign-up
   * @param bodyParams
   */
  @Post('sign-up')
  signUp(@Body() bodyParams: SignUpDto ){
    return this.authService.signUp(bodyParams.username,bodyParams.password,bodyParams.orgName)
  }
}
