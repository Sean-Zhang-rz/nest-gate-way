import { Controller, Post, Body, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddUserDto } from './user.dto';
@ApiTags('用户')
@Controller('user')
export class UserController {
 constructor(
    private readonly userService: UserService,
  ) { }

  @ApiOperation({
    summary: '新增用户',
  })
  @Version([VERSION_NEUTRAL])
  @Post('/add')
  create(@Body() user: AddUserDto) {
    return this.userService.createOrSave(user);
  }
}
