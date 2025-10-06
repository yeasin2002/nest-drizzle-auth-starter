import { Controller, Get } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Returns a greeting message' })
  @ApiResponse({ status: 200, description: 'Hello World message' })
  getHello(): string {
    return this.appService.getHello();
  }
}
