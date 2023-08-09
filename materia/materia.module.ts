import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaController } from './materia.controller';
import { MateriaService } from './materia.service';
import { Materia } from './materia.entity';
import { CronogramaModule } from 'src/cronograma/cronograma.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Materia]),
        CronogramaModule
    ],
    controllers: [
        MateriaController
    ],
    providers: [
        MateriaService
    ]
})
export class MateriaModule {}