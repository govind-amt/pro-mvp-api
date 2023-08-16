import {Body, Controller , Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {LoginDto} from "@pro-fuel-trace-api/data-transfer-object";

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
}
