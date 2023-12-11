import { DatabaseService } from '../database/database.service';
import { Injectable } from '@nestjs/common';
// import { selectUserIds } from './queries';

@Injectable()
export class UsersService {
  constructor(private dataSource: DatabaseService) { }

  async getUsers() {
    try {
      // const books = await selectUserIds.run(
      //   {
      //     id: 'some-user-id',
      //     age: 34,
      //   },
      //   this.dataSource,
      // )

      // return books;
    } catch (error) {
      throw error;
    }
  }
}
