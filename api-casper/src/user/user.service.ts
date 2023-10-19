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
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>, //private readonly perfilAcademico: PerfilacademicoService,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(user: CreateUserDto): Promise<UserEntity> {
    const userFound: UserEntity = await this.userRepository.findOneBy({
      nome: user.nome,
    });

    if (!userFound) {
      const newUser: UserEntity = this.userRepository.create(user);

      await this.userRepository.save<UserEntity>(newUser);

      return newUser;
    }

    throw new HttpException('Usuário já cadastrado!', HttpStatus.CONFLICT);
  }

  async signIn(username: string, pass: string) {
    const user: UserEntity = await this.userRepository.findOneBy({
      nome: username,
    });
    if (user?.senha !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.nome };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async findAllUsers(): Promise<UserEntity[]> {
    const users: UserEntity[] = await this.userRepository.find();

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

    const user: UserEntity = await this.userRepository.findOneBy({
      id: userId,
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
