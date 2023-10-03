import { Controller, 
  Get, 
  Post, 
  Body, 
  Put, 
  Param, 
  Delete, 
  ParseIntPipe} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Controller('/user')
export class UserController {
  constructor(private service: UserService) {}

  //Testar
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.service.createUser(createUserDto);
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
  async updateUser(
    @Body() user: UpdateUserDto,
  ): Promise<UpdateResult> {
    return await this.service.updateUser(user);
  }

  //Testar
  @Delete(':userId')
  async deleteUser(
    @Param('userId', ParseIntPipe) userId: number):
    Promise<DeleteResult> {
    return await this.service.deleteUser(userId);
  }
}
