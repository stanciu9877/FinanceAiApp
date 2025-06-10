import { Body, Controller, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put(':id/preferences')
  updatePreferences(
    @Param('id') userId: string,
    @Body() body: { stocks: string[] },
  ) {
    return this.userService.updateUserPreferences(userId, body.stocks);
  }
}
