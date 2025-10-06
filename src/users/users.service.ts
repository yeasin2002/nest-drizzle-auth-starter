import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Yeasin',
      email: 'yeasin@example.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    return {
      id: createUserDto.id,
      name: createUserDto.name,
      email: createUserDto.email,
    };
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.users.find((user) => user.id === id);
  }

  remove(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
