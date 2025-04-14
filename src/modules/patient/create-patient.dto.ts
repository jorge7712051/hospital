import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

export class CreatePatientDto {
  @ApiProperty({ example: 'John', description: 'Name of the patient' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the patient' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'Birth date of the patient',
  })
  @Matches(/^\d{4}(-)(((0)[\d])|((1)[0-2]))(-)([0-2][\d]|(3)[0-1])$/i, {
    message: '$property must be formatted as YYYY-MM-DD',
  })
  @IsDateString()
  birthDate: Date;

  @ApiProperty({
    example: ['fever', 'cough'],
    description: 'History of the patient',
  })
  @IsArray()
  @IsString({ each: true })
  @ArrayNotEmpty({ message: `$property cannot be empty` })
  historyPatient: string[];
}
