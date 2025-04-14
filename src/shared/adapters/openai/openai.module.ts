import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenAIAdapter } from './openai.adpater';

@Module({
  imports: [ConfigModule],
  providers: [OpenAIAdapter],
  exports: [OpenAIAdapter],
})
export class OpenAIModule {}
