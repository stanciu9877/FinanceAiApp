import { Module } from '@nestjs/common';
import { AdvisorModule } from './advisor/advisor.module';

@Module({
  imports: [AdvisorModule],
})
export class AppModule {}
