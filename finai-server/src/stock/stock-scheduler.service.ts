import { Cron } from '@nestjs/schedule';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScheduleService {
  constructor(private readonly stockScheduler: StockSchedulerService) {}

  @Cron('0 9 * * *') // every day at 9 AM
  async handleDailyAdvice() {
    await this.stockScheduler.generatePersonalizedAdviceForAllUsers();
  }
}
