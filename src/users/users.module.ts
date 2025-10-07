import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AuthModule],
  exports: [UsersService],
})
export class UsersModule {}
