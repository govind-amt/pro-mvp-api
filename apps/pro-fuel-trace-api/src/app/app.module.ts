import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthModule} from "@pro-fuel-trace-api/auth";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {ConfigurationModule} from "@pro-fuel-trace-api/configuration";




@Module({
  imports: [AuthModule,
    ConfigurationModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: process.env.MONGO_URI,
        dbName: process.env.MONGO_DB_NAME,
      })
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
