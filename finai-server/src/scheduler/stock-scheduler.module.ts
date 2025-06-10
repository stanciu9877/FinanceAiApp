import { Module } from '@nestjs/common';
import { StockSchedulerController } from './stock-scheduler.controller';
import { StockSchedulerService } from './stock-scheduler.service';

@Module({
  controllers: [StockSchedulerController],
  providers: [StockSchedulerService],
})
export class StockSchedulerModule {}
