import { Injectable } from '@nestjs/common';
import { Professor } from './professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfessorService {
    constructor(
        @InjectRepository(Professor)
        private professorRepository: Repository<Professor>
    ){}
    
    getProfessores() : Promise<Professor[]>{
        return this.professorRepository.find();
    }

    getProfessorPorId(id: number) : Promise<Professor | null>{
        return this.professorRepository.findOneBy({ id });
    }

    async createProfessor(professor: Professor) : Promise<void>{
        await this.professorRepository.insert(professor);
    }

    async updateProfessor(professor: Professor) : Promise<void>{
        await this.professorRepository.update(professor.id, professor);
    }

    async deleteProfessor(id: number): Promise<void> {
        await this.professorRepository.delete(id);
    }
}