import { Injectable } from '@nestjs/common';
import { Materia } from './materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CronogramaService } from 'src/cronograma/cronograma.service';

@Injectable()
export class MateriaService {
    constructor(
        @InjectRepository(Materia)
        private materiaRepository: Repository<Materia>
    ){}

    getMaterias() : Promise<Materia[]>{
        return this.materiaRepository.find();
    }

    getMateriaPorId(id: number) : Promise<Materia> {
        return this.materiaRepository.findOneBy({ id });
    }

    getMateriasPorProfessor(professorId: number) : Promise<Materia[]>{
        //A Fazer, Cronograma guardará o registro das materias já ministradas
        // com professores e matérias, é nescessário fazer um filtro para pegar 
        // todas as matérias alocadas para determinado professor
        return;
    }

    async createProfessor(materia: Materia) : Promise<void>{
        await this.materiaRepository.insert(materia);
    }

    async updateProfessor(materia: Materia) : Promise<void>{
        await this.materiaRepository.update(materia.id, materia);
    }

    async deleteProfessor(id: number): Promise<void>{
        await this.materiaRepository.delete(id);
    }
}