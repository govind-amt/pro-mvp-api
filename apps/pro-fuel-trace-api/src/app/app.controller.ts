import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {ApiTags} from "@nestjs/swagger";
import { UseInterceptors } from '@nestjs/common';
import {SentryInterceptor} from "@pro-fuel-trace-api/configuration";

@UseInterceptors(SentryInterceptor)
@ApiTags('General')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getData() {
    return this.appService.getData();
  }
}
