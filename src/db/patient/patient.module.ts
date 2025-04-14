import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { PatientDbService } from './patientDb.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  exports: [PatientDbService],
  providers: [PatientDbService],
})
export class PatientDbModule {}
