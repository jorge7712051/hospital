import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PatientModule } from './modules/patient/patient.module';
import { EnvConfiguration } from './config/service-configuration';
import { typeOrmConfig } from './config/orm-config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [EnvConfiguration],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    PatientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
