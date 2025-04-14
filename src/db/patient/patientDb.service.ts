import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Patient } from './patient.entity';

@Injectable()
export class PatientDbService {
  constructor(
    @InjectRepository(Patient)
    private readonly repository: Repository<Patient>,
  ) {}

  create(data: Partial<Patient>): Promise<Patient> {
    const patient = this.repository.create(data);
    return this.repository.save(patient);
  }

  findAll(): Promise<Patient[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Patient> {
    return await this.repository.findOne({ where: { id } });
  }
}
