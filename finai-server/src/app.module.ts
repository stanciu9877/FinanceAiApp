import { Module } from '@nestjs/common';
import { AdvisorModule } from './advisor/advisor.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './users/user.module';

@Module({
  imports: [AdvisorModule],
})
@Module({
  imports: [ScheduleModule.forRoot()],
})
@Module({
  imports: [UserModule],
})
export class AppModule {}
