import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorModule } from './professor/professor.module';
import { MateriaModule } from './materia/materia.module';
import { typeOrmConfig } from './core/infra/config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { RelevantAreaModule } from './relevant_area/relevant_area.module';
import { AvaliationModule } from './avaliacao/avaliation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    ProfessorModule,
    MateriaModule,
    RelevantAreaModule,
    AvaliationModule,
  ],
})
export class AppModule {}
