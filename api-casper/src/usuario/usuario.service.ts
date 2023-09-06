import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly commentUsuario: Repository<Usuario>,
  ) {}
  async getAllUsuarios(): Promise<Usuario[]> {
    const usuarios: Usuario[] = await this.commentUsuario.find();

    if (!usuarios) {
      throw new HttpException('Usuarios não achado', HttpStatus.NOT_FOUND);
    }

    return comments;
  }

  async getUsuarioById(userId: number): Promise<Usuario> {
    if (!userId) {
      throw new HttpException(
        'One parameteres are undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }

    const usuario: Usuario = await this.commentUsuario.findOneBy({
      userId: userId
    });

    if (!usuario) {
      throw new HttpException('Usuario not found', HttpStatus.NOT_FOUND);
    }

    return comment;
  }

  async postNewUsuario(
    usuario: Partial<Usuario>
  ): Promise<Usuario> {

    const newUsuario: Usuario = this.commentUsuario.create(usuario);
    return await this.commentUsuario.save(newUsuario);
  }

  async editUsuario(
    usuario: Partial<Usuario>,
    qUsuarioId: number,
  ): Promise<UpdateResult> {
    const updated: UpdateResult = await this.commentUsuario.update(
      { usuarioId: qUsuarioId},
      usuario
    );

    if (updated.affected === 0) {
      throw new HttpException(
        'Usuario not edited',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return updated;
  }

  async deleteUsuario(
    qUsuarioId: number
  ): Promise<DeleteResult> {
    const deleted: DeleteResult = await this.commentUsuario.delete({
      usuarioId: qUsuarioId
    });

    if (deleted.affected === 0) {
      throw new HttpException(
        'Usuario not deleted',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return deleted;
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
