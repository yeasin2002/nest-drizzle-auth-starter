import { ApiTags } from '@nestjs/swagger';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiCreateUserDocs,
  ApiDeleteUserDocs,
  ApiGetUserDocs,
  ApiGetUsersDocs,
  ApiUpdateUserDocs,
} from './users.docs';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreateUserDocs()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiGetUsersDocs()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiGetUserDocs()
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiUpdateUserDocs()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiDeleteUserDocs()
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
