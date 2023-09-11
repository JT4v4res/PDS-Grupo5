import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateriaController } from './materia.controller';
import { MateriaService } from './materia.service';
import { MateriaEntity } from './entity/materia.entity';
import { CronogramaModule } from 'src/cronograma/cronograma.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([MateriaEntity]),
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