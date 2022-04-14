import { Controller, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  bubbleSort(@Request() request): string {
    const arr = request.body.arr.split(',').map(Number);
    return this.appService.bubbleSort(arr);
  }
}
