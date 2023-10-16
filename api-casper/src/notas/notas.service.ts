import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NotaEntity } from './entities/nota.entity';
import { Repository } from 'typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class NotasService {
  constructor(
    @InjectRepository(NotaEntity)
    private notaRepository: Repository<NotaEntity>,
  ){}

  async createNota(nota: CreateNotaDto): Promise<NotaEntity> {
    
    const newNota: NotaEntity =
      this.notaRepository.create(nota);

    await this.notaRepository.save<NotaEntity>(newNota);

    return newNota;
  }

  async getNotas(): Promise<NotaEntity[]> {
    return await this.notaRepository.find();
  }

  async getNotaById(idNota: number):Promise<NotaEntity> {
      return await this.notaRepository.findOneBy({idNota: idNota});
  }

  async updateNota(updateNotaDto: UpdateNotaDto): Promise<UpdateResult> {
    const updated: UpdateResult = await this.notaRepository.update(
      { id: this.notaRepository.matricula },
      nota,
    );

    if (updated) {
      if (updated.affected === 0) {
        throw new HttpException(
          'Nota not edited',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return updated;
  }

  async deleteNota(matricula: string):Promise<DeleteResult> {
    const deleted: DeleteResult = await this.notaRepository.delete({
      id: matricula,
    });

    if (deleted) {
      if (deleted.affected === 0) {
        throw new HttpException(
          'Nota not deleted',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return deleted;
  }
}
