import { Controller, Get } from '@nestjs/common';

@Controller('programs')
export class ProgramsController {
  @Get()
  fetchPrograms() {
    return 'Hello'
  }
}
