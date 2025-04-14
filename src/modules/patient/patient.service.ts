import { Injectable, NotFoundException } from '@nestjs/common';
import { PatientDbService } from '../../db/patient/patientDb.service';
import { IPatient, IPatientRequest } from './patient.interface';
import { OpenAIAdapter } from '../../shared/adapters/openai/openai.adpater';
import { PROMPT_DIAGNOSIS } from '../../shared/constans/patient';

@Injectable()
export class PatientService {
  constructor(
    private readonly patientDbService: PatientDbService,
    private readonly openaiAdapter: OpenAIAdapter,
  ) {}

  async create(createPatient: IPatientRequest): Promise<IPatient> {
    return await this.patientDbService.create(createPatient);
  }

  async findAll(): Promise<IPatient[]> {
    const patients = await this.patientDbService.findAll();

    return patients;
  }

  async findOne(id: string): Promise<IPatient> {
    const patient = await this.patientDbService.findOne(id);

    if (!patient) throw new NotFoundException('Paciente no encontrado');
    return patient;
  }

  async generateDiagnosis(historial: string[]): Promise<string> {
    const prompt = `${PROMPT_DIAGNOSIS}\n\n${historial
      .map((h) => `- ${h}`)
      .join('\n')}`;

    return this.openaiAdapter.chat(prompt);
  }
}
