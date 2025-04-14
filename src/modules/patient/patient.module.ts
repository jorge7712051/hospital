import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { PatientDbModule } from '../../db/patient/patient.module';
import { AuthModule } from '../../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { OpenAIModule } from '../../shared/adapters/openai/openai.module';
import { OpenAiLogDbModule } from '../../db/openi-log/openai-logDb.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    PatientDbModule,
    OpenAIModule,
    OpenAiLogDbModule,
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
