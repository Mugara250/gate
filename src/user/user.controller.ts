import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  public getAll(): UserDTO[] {
    return this.userService.getAll();
  }

  @Get(':id')
  public get(@Param('id', ParseIntPipe) id: number): UserDTO {
    return this.userService.get(id);
  }
}
