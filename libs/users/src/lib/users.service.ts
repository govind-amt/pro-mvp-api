import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import {UserDocument} from "@pro-fuel-trace-api/schema";

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {
  }
  async getUser(name: string ) :Promise<UserDocument>{
    return this.userRepo.checkUser(name);
  }
}
