import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  UseGuards,
  InternalServerErrorException,
  UseInterceptors,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './create-patient.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Patient } from '../../db/patient/patient.entity';
import { OpenAiLogInterceptor } from '../../shared/interceptors/openai-log.interceptor';

@ApiTags('Patients')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @ApiResponse({
    status: 201,
    description: 'Patient created successfully',
    type: Patient,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Post()
  async create(@Body() createPatient: CreatePatientDto): Promise<Patient> {
    try {
      return await this.patientService.create(createPatient);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Patients retrieved successfully',
    type: Patient,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async findAll(): Promise<Patient[]> {
    try {
      return await this.patientService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @ApiResponse({
    status: 404,
    description: 'Patient not found',
  })
  @ApiResponse({
    status: 200,
    description: 'Patient retrieved successfully',
    type: Patient,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Patient> {
    try {
      return await this.patientService.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
    }
  }

  @ApiResponse({
    status: 200,
    description: 'Diagnosis generated successfully',
    type: String,
  })
  @ApiResponse({ status: 404, description: 'Patient not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @UseInterceptors(OpenAiLogInterceptor)
  @Post('diagnosis-ai/:id')
  async generateDiagnosis(@Param('id') id: string): Promise<string> {
    try {
      const patient = await this.patientService.findOne(id);

      return await this.patientService.generateDiagnosis(
        patient.historyPatient,
      );
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException(error.message);
    }
  }
}
