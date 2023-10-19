import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { PerfilacademicoService } from 'src/perfilacademico/perfilacademico.service';
import { JwtService } from '@nestjs/jwt';
import { PerfilacademicoEntity } from '../perfilacademico/entities/perfilacademico.entity';
import { CreatePerfilacademicoDto } from '../perfilacademico/dto/create-perfilacademico.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly perfilAcademico: PerfilacademicoService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(user: CreateUserDto): Promise<UserEntity> {
    const userFound: UserEntity = await this.userRepository.findOneBy({
      nome: user.nome,
      email: user.email,
    });

    if (userFound === null || userFound === undefined) {
      const newProfile: PerfilacademicoEntity =
        await this.perfilAcademico.createPerfil(user.perfilAcademico);

      const newUser: UserEntity = await this.userRepository.create(user);

      newUser.perfil = newProfile;

      await this.userRepository.save<UserEntity>(newUser);

      return newUser;
    }

    throw new HttpException('Usuário já cadastrado!', HttpStatus.CONFLICT);
  }

  async signIn(email: string, pass: string) {
    const user: UserEntity = await this.userRepository.findOneBy({
      email: email,
    });
    if (user?.senha !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.nome };
    return {
      id: user.id,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async findAllUsers(): Promise<UserEntity[]> {
    const users: UserEntity[] = await this.userRepository.find({
      relations: {
        perfil: true,
        valuations: true,
      },
    });

    if (!users) {
      throw new HttpException('Users not found', HttpStatus.NOT_FOUND);
    }
    return users;
  }

  async getUserbyId(userId: number): Promise<UserEntity> {
    if (!userId) {
      throw new HttpException(
        'Parameter undefined or null',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user: UserEntity = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        perfil: true,
        valuations: true,
      },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async updateUser(user: UpdateUserDto): Promise<UpdateResult> {
    const updated: UpdateResult = await this.userRepository.update(
      { id: user.id },
      user,
    );

    if (updated) {
      if (updated.affected === 0) {
        throw new HttpException(
          'User not edited',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
    return updated;
  }

  async deleteUser(userId: number): Promise<DeleteResult> {
    const deleted: DeleteResult = await this.userRepository.delete({
      id: userId,
    });

    if (deleted) {
      if (deleted.affected === 0) {
        throw new HttpException(
          'User not deleted',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    return deleted;
  }
}
