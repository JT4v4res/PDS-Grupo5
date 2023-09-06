import { Injectable } from '@nestjs/common';
import { Cronograma } from './cronograma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from 'src/materia/materia.entity';

@Injectable()
export class CronogramaService{
    constructor(
        @InjectRepository(Cronograma)
        cronogramaRepository: Repository<Cronograma>
    ){}
    
    public getMateriasProfessor(idProfessor: number) : Promise<Materia[]> {
        return ;
    }
}