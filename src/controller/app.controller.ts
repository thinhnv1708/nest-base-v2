import { TheResponseData } from '@core/dto';
import { Controller, Get } from '@nestjs/common';
import { TheResponseDataFactory } from 'src/helper';

@Controller('/')
export class AppController {
  @Get('/health')
  heath(): TheResponseData<undefined> {
    return new TheResponseDataFactory<undefined>().build();
  }
}
