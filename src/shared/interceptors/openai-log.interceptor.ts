import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { OpenAiLogService } from '../../db/openi-log/openai-log.service';

@Injectable()
export class OpenAiLogInterceptor implements NestInterceptor {
  constructor(private readonly logService: OpenAiLogService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(async (response) => {
        await this.logService.create(
          request.url,
          JSON.stringify(request.body),
          JSON.stringify(response),
        );
      }),
    );
  }
}
