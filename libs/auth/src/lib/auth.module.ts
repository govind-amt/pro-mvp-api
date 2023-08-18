import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, userSchemaName } from "@pro-fuel-trace-api/schema";
import {UsersRepository, UsersService} from "@pro-fuel-trace-api/users";

@Module({
  imports:[

    JwtModule.register({
      global: true,
      secret: "BRING_FROM_CONSTANTS_FILE",
      signOptions: { expiresIn: '60s' },
    }),
    MongooseModule.forFeature([{
      name: userSchemaName, schema:UserSchema
    }])
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersRepository, UsersService],
  exports: [],
})
export class AuthModule {}
