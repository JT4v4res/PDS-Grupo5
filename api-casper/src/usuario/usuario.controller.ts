import {
  Body,
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Usuario } from './comments.entity';
import { UsuarioService } from './comments.service';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Get()
  async getAllUsuarios(): Promise<Usuario[]> {
    try {
      return await this.usuarioService.getAllUsuarios();
    } catch (error) {
      await this.usuarioService.handleError(error);
    }
  }

  @Get('/userId')
  async getUser(
    @Param(':userId') userId: number
  ): Promise<Usuario> {
    try {
      return await this.usuarioService.getUsuarioById(userId);
    } catch (error) {
      await this.usuarioService.handleError(error);
    }
  }

  @Post()
  async postComment(
    @Body() usuario: Usuario
  ): Promise<Usuario> {
    try {
      const requiredFields: string[] = [
        'nome',
        'pontuacaoTotal',
        'matricula',
        'historicoId',
      ];
      const emptyFields: string[] = [];

      requiredFields.forEach((field: string): void => {
        if (!comment[field]) {
          emptyFields.push(field);
        }
      });

      if (emptyFields.length > 0) {
        throw new HttpException(
          `The fields ${emptyFields.values()} are empty`,
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.usuarioService.postNewUsuario(usuario);
    } catch (error) {
      await this.usuarioService.handleError(error);
    }
  }

  @Patch('/userId')
  async editUsuario(
    @Body() usuario: Partial<Usuario>,
    @Param(':userId') userId: number,
  ): Promise<UpdateResult> {
    try {
      if (!userId || !usuario) {
        throw new HttpException(
          'Either comment or community id is empty',
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.usuarioService.editUsuario(usuario, userId);
    } catch (error) {
      await this.usuarioService.handleError(error);
    }
  }

  @Delete('/userId')
  async deleteComment(
    @Param(':userId') qCommId: number
  ): Promise<DeleteResult> {
    try {
      if (!userId) {
        throw new HttpException(
          'Community ID and comment ID are either required',
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.usuarioService.deleteUsuario(userId);
    } catch (error) {
      await this.usuarioService.handleError(error);
    }
  }
}
