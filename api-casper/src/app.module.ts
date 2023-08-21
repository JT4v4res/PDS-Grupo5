import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorModule } from './professor/professor.module';
import { MateriaModule } from './materia/materia.module';
import { typeOrmConfig } from './core/infra/config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProfessorModule,
    MateriaModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
