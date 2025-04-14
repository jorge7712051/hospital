import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTabledPatient1744488441911 implements MigrationInterface {
  name: 'CreateTabledPatient1744488441911';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "patient" (
              "id" uuid NOT NULL DEFAULT gen_random_uuid(),
              "name" character varying NOT NULL,
              "last_name" character varying NOT NULL,
              "birth_date" date NOT NULL,
              "history_patient" text[] NOT NULL,
              CONSTRAINT "PK_patient_id" PRIMARY KEY ("id")
            )
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "patient"`);
  }
}
