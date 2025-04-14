import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenAiLog } from './openai-log.entity';
import { OpenAiLogService } from './openai-log.service';

@Module({
  imports: [TypeOrmModule.forFeature([OpenAiLog])],
  providers: [OpenAiLogService],
  exports: [OpenAiLogService],
})
export class OpenAiLogDbModule {}
