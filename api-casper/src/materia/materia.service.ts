import { Injectable } from '@nestjs/common';
import { Materia } from './materia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from '../professor/professor.entity';
import { InsertResult, DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class MateriaService {
    constructor(
        @InjectRepository(Materia)
        private materiaRepository: Repository<Materia>
    ){}

    async getMaterias() : Promise<Materia[]>{
        const materias: Materia[] = await this.materiaRepository.find();
        if (!materias) {
            throw new HttpException('Materias not found', HttpStatus.NOT_FOUND);
        }
        return materias;
    }

    async getMateriaPorId(idMateria: number) : Promise<Materia> {
        if (!idMateria) {
            throw new HttpException(
                'One parameteres are undefined or null',
                HttpStatus.BAD_REQUEST,
            );
        }
        const materia: Materia = await this.materiaRepository.findOneBy({id: idMateria})
        if (!materia) {
            throw new HttpException('Materia not found', HttpStatus.NOT_FOUND);
        }
        return materia;
    }

    async getProfessoresPorMateria(idMateria: number) : Promise<Professor[]>{
        const materia: Materia = await this.getMateriaPorId(idMateria);
        if (!materia.professores) {
            throw new HttpException('Professores not found', HttpStatus.NOT_FOUND);
        }
        return materia.professores;
    }

    async createMateria(materia: Partial<Materia>) : Promise<InsertResult>{
        await this.materiaRepository.insert(materia);
    }

    async updateMateria(materia: Partial<Materia>) : Promise<UpdateResult>{
        const updated: UpdateResult = await this.materiaRepository.update({id: materia.id}, materia);
        if (updated.affected === 0) {
            throw new HttpException(
                'Materia not edited',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
        await updated;
    }

    async deleteMateria(idMateria: number): Promise<DeleteResult>{
        const deleted: DeleteResult = await this.materiaRepository.delete({id: idMateria});
        if (deleted.affected === 0) {
            throw new HttpException(
                'Materia not deleted',
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