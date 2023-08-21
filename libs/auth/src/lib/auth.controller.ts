import {Body, Controller , Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {LoginDto} from "@pro-fuel-trace-api/data-transfer-object";
import { UseInterceptors } from '@nestjs/common';
import {SentryInterceptor} from "@pro-fuel-trace-api/configuration";

@UseInterceptors(SentryInterceptor)
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
