import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpenAiLog } from './openai-log.entity';

@Injectable()
export class OpenAiLogService {
  constructor(
    @InjectRepository(OpenAiLog)
    private readonly logRepo: Repository<OpenAiLog>,
  ) {}

  async create(
    endpoint: string,
    request: string,
    response: string,
  ): Promise<void> {
    const log = this.logRepo.create({ endpoint, request, response });
    await this.logRepo.save(log);
  }
}
