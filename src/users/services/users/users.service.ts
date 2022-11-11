import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private _fakeUsers = [
    {
      username: 'Saulo',
      password: '123456',
    },
    {
      username: 'Carol',
      password: '123456',
    },
  ];

  fetchUsers() {
    return this._fakeUsers;
  }

  createUser(userData: CreateUserType) {
    return this._fakeUsers.push(userData);
  }
}
