import { Module } from '@nestjs/common';
import { ProgramsModule } from './programs/programs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProgramsModule
  ]
})
export class AppModule {}
