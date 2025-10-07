import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { user } from 'src/db/schemas';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private dbService: DbService) {}

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

  async findAll() {
    const users = await this.dbService.db.select().from(user);
    return users;
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
