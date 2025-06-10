import { Controller, Param } from '@nestjs/common';
import { StockSchedulerService } from './stock-scheduler.service';

@Controller('stockSchedule')
export class StockSchedulerController {
  constructor(private readonly stockSchedulerService: StockSchedulerService) {}

  updateInfoAllUsers() {
    return this.stockSchedulerService.generatePersonalizedAdviceForAllUsers();
  }
  updateInfoSingleUser(@Param('id') userId: string) {
    return this.stockSchedulerService.generatePersonalizedAdviceForAllUsers(
      userId,
    );
  }
}
