import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('openai_log')
export class OpenAiLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  endpoint: string;

  @Column('text')
  request: string;

  @Column('text')
  response: string;

  @CreateDateColumn()
  createdAt: Date;
}
