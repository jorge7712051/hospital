import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableOpenaiLog1744582660133 implements MigrationInterface {
  name = 'CreateTableOpenaiLog1744582660133';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          CREATE TABLE openai_log (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            endpoint VARCHAR NOT NULL,
            request TEXT NOT NULL,
            response TEXT NOT NULL,
            "createdAt" TIMESTAMP DEFAULT now()
          );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE openai_log;`);
  }
}
