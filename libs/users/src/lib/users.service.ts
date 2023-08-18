import {Injectable} from '@nestjs/common';
import {UsersRepository} from './users.repository';
import * as bcrypt from "bcrypt";

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

  /**
   * function to create user while signing up
   * @param email
   * @param password
   * @param orgName
   */
  async createUser(email: string, password: string,orgName:string) {
    const hashedPassword = await bcrypt.hash(password, 12);
    return await this.userRepo.saveUser(email,hashedPassword,orgName);
  }

}
