import { Module } from '@nestjs/common';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotaEntity } from './entities/nota.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NotaEntity])],
  controllers: [NotasController],
  providers: [NotasService],
  exports: [TypeOrmModule]
})
export class NotasModule {}
