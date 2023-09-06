import { Injectable } from '@nestjs/common';
import { Professor } from './professor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class ProfessorService { 
    constructor(
        @InjectRepository(Professor)
        private professorRepository: Repository<Professor>
    ){}
    
    async getProfessores() : Promise<Professor[]>{
        const professores: Professor[] = await this.professorRepository.find();
        if (!professores) {
            throw new HttpException('Professores not found', HttpStatus.NOT_FOUND);
        }
        return professores;
    }

    async getProfessorPorId(idProfessor: number) : Promise<Professor>{
        if (!idProfessor) {
            throw new HttpException(
                'One parameteres are undefined or null',
                HttpStatus.BAD_REQUEST,
            );
        }
        const professor: Professor = await this.professorRepository.findOneBy({ id: idProfessor});
        if (!professor) {
            throw new HttpException('Professor not found', HttpStatus.NOT_FOUND);
        }
        return professor;
    }

    async createProfessor(professor: Partial<Professor>) : Promise<InsertResult>{
        return await this.professorRepository.insert(professor);
    }

    async updateProfessor(professor: Partial<Professor>) : Promise<UpdateResult>{
        const updated: UpdateResult = await this.professorRepository.update({id: professor.id}, professor);
        if (updated.affected === 0) {
            throw new HttpException(
                'Professor not edited',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        await updated;
    }

    async deleteProfessor(idProfessor: number): Promise<DeleteResult> {
        const deleted: DeleteResult = await this.professorRepository.delete({id: idProfessor});
        if (deleted.affected === 0) {
            throw new HttpException(
                'Professor not deleted',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        await deleted;
    } 

    async handleError(error: HttpException): Promise<void> {
        throw new HttpException(
            {
                statusCode: error.getStatus(),
                error: error.message,
            },
            error.getStatus(),
            {
                cause: error,
            },
        );
    }
}