import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {
  }
  async getUser(name: string ) {

    const responseOne = await this.userRepo.checkUser(name);

    if(responseOne && Object.keys(responseOne).length) {
      return responseOne;
    } else {
      return {  username: null, role: null, orgName: null, password:null}
    }

  }
}
