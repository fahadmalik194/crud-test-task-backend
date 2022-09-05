import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { User } from './user.model';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  create(@Body() user: UserDto): Promise<User> {
    return this.userService.create(user);
  }
}
