import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {UserDocument , userSchemaName} from "@pro-fuel-trace-api/schema";

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(userSchemaName) private userModel: Model<UserDocument>) { }
  async checkUser(username: string) {
    const responseOne = this.userModel.findOne({username:username});
    if(Object.keys(responseOne).length) {
      return responseOne;
    } else {
        return new this.userModel();
      }
  }
}
