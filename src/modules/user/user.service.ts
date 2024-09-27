import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/createUser.dto';

// export interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    try {
      const users = await this.usersRepository.find();
      console.log('USers found', users.length);
      return users;
    } catch (error) {
      console.error('Error getting users');
      throw error;
    }
    // return [
    //   {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'johndoe@example.com',
    //   },
    //   {
    //     firstName: 'James',
    //     lastName: 'Brown',
    //     email: 'jamesbrown@example.com',
    //   },
    //   {
    //     firstName: 'Okon',
    //     lastName: 'Akpan',
    //     email: 'okonakpan@example.com',
    //   },
    // ];
  }

  public async createUser(user: CreateUserDto): Promise<void> {
    try {
      const userDetails = await this.usersRepository.save(user);
      console.log('Saved user', userDetails);
    } catch (error) {
      console.log('user not created, error');
      throw error;
    }
  }
}
