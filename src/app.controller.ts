import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome(): string {
    return '🚀 NestJS Backend funcionando correctamente!';
  }
}
