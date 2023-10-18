import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('/user')
export class UserController {
  constructor(private service: UserService) {}

  //Testar
  @Post('/cadastro')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.service.createUser(createUserDto);
  }

  @Post('/login')
  async login(@Body() userLogin: UserLoginDto) {
    return await this.service.signIn(userLogin.email, userLogin.senha);
  }

  //Testar
  @Get()
  async findAllUsers(): Promise<UserEntity[]> {
    return await this.service.findAllUsers();
  }

  //Testar
  @Get(':userId')
  async getUserbyId(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<UserEntity> {
    return await this.service.getUserbyId(userId);
  }

  //Testar
  @Put()
  async updateUser(@Body() user: UpdateUserDto): Promise<UpdateResult> {
    return await this.service.updateUser(user);
  }

  //Testar
  @Delete(':userId')
  async deleteUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<DeleteResult> {
    return await this.service.deleteUser(userId);
  }
}
