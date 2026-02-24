import { Injectable, NotFoundException } from '@nestjs/common';
import { users } from 'data/data';

@Injectable()
export class UserService {
  public getAll() {
    return users;
  }

  public get(id: number) {
    const user = users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}
