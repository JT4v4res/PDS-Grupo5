import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorModule } from './professor/professor.module';
import { MateriaModule } from './materia/materia.module';
import { Professor } from './professor/professor.entity';
import { Materia } from './materia/materia.entity';
import { Cronograma } from './cronograma/cronograma.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'cesar',
      password: 'ufal2012',
      database: 'my_nestjs_project',
      entities: [Professor, Materia, Cronograma],
      synchronize: true,
    }),
    ProfessorModule,
    MateriaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
