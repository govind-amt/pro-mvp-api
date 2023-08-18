import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {UserDocument , userSchemaName} from "@pro-fuel-trace-api/schema";

@Injectable()
export class UsersRepository {

  constructor(@InjectModel(userSchemaName) private userModel: Model<UserDocument>) { }
  async checkUser(username: string) {
    const queryResponse = this.userModel.findOne({username:username});
    if(Object.keys(queryResponse).length) {
      return queryResponse;
    } else {
        return new this.userModel();
      }
  }

  /**
   * function to save user while signing up
   * @param email
   * @param password
   * @param orgName
   */
  async saveUser(email: string, password: string,orgName:string) {
    const user = new this.userModel({
      username: email,
      password: password,
      orgName:orgName,
      role:1
    });
    await user.save();
    return user;
  }
}
