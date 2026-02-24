import { Injectable } from '@nestjs/common';
import { users } from 'data/data';

@Injectable()
export class UserService {
  public getAll() {
    return users;
  }
}
