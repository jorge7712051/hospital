import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedPatients1744488441912 implements MigrationInterface {
  name = 'SeedPatients1744488441912';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO patient (id, name, last_name, birth_date, history_patient)
        VALUES
          (
            gen_random_uuid(),
            'Juan',
            'Pérez',
            '1985-06-15',
            ARRAY['Hipertensión', 'Alergia a la penicilina']
          ),
          (
            gen_random_uuid(),
            'María',
            'Gómez',
            '1990-08-20',
            ARRAY['Asma']
          ),
          (
            gen_random_uuid(),
            'Juan',
            'Pérez',
            '1985-06-15',
            ARRAY['Hipertensión', 'Alergia a la penicilina']
           ),
        (
            gen_random_uuid(),
            'María',
            'Gómez',
            '1990-08-20',
            ARRAY['Asma']
        ),
        (
            gen_random_uuid(),
            'Carlos',
            'Ramírez',
            '1972-11-10',
            ARRAY['Diabetes tipo 2', 'Colesterol alto', 'Cirugía de vesícula (2015)']
        ),
        (
            gen_random_uuid(),
            'Lucía',
            'Fernández',
            '2001-04-03',
            ARRAY['Migrañas frecuentes', 'Deficiencia de hierro']
        ),
        (
            gen_random_uuid(),
            'Andrés',
            'Molina',
            '1988-09-27',
            ARRAY['Asma', 'Rinitis alérgica', 'Vacunación completa hasta 2023']
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM patient`);
  }
}
