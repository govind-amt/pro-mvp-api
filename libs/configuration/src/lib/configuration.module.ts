import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import {SentryInterceptor} from "./sentry.interceptor";

@Module({
  controllers: [],
  providers: [ConfigurationService, SentryInterceptor],
  exports: [SentryInterceptor],
})
export class ConfigurationModule {}
