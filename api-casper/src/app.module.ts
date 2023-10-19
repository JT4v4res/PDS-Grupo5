import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorModule } from './professor/professor.module';
import { MateriaModule } from './materia/materia.module';
import { typeOrmConfig } from './core/infra/config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { RelevantAreaModule } from './relevant_area/relevant_area.module';
import { AvaliationModule } from './avaliacao/avaliation.module';
import { RequestLoggerMiddleware } from './core/infra/middlewares/logger/logger.middleware';
import { ProfessorController } from './professor/professor.controller';
import { MateriaController } from './materia/materia.controller';
import { RelevantAreaController } from './relevant_area/relevant_area.controller';
import { AvaliationController } from './avaliacao/avaliation.controller';
import { APP_FILTER } from '@nestjs/core';
import { ValidationExceptionFilter } from './core/infra/middlewares/logger/exceptionfilter.filter';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { PerfilacademicoController } from './perfilacademico/perfilacademico.controller';

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
    UserModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ValidationExceptionFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLoggerMiddleware)
      .forRoutes(
        ProfessorController,
        MateriaController,
        RelevantAreaController,
        AvaliationController,
        UserController,
        PerfilacademicoController,
      );
  }
}
