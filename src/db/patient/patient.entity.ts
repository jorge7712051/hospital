import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patient {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'UUID of the patient',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'John',
    description: 'Name of the patient',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the patient',
  })
  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @ApiProperty({
    example: '1990-01-01',
    description: 'Birth date of the patient',
  })
  @Column({ name: 'birth_date', type: 'date', nullable: false })
  birthDate: Date;

  @ApiProperty({
    example: ['fever', 'cough'],
    description: 'history of the patient',
  })
  @Column({
    name: 'history_patient',
    nullable: false,
    type: 'text',
    array: true,
  })
  historyPatient: string[];
}
