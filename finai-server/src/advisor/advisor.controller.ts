import { Controller, Post, Body } from '@nestjs/common';
import { AdvisorService } from './advisor.service';

@Controller('advisor')
export class AdvisorController {
  constructor(private readonly advisorService: AdvisorService) {}

  @Post('ask')
  ask(@Body('question') question: string) {
    return this.advisorService.ask(question);
  }
}
