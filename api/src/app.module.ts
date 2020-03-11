import { Module } from '@nestjs/common';
import { ProgramsModule } from './programs/programs.module';

@Module({
  imports: [ProgramsModule]
})
export class AppModule {}
