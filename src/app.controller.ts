import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  bubbleSort(@Query() query): string {
    const arr = query.arr.split(',').map(Number);
    return this.appService.bubbleSort(arr);
  }
}
