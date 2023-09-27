import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliationEntity } from './entity/avaliation.entity';
import { AvaliationController } from './avaliation.controller';
import { AvaliationService } from './avaliation.service';

@Module({
  imports: [TypeOrmModule.forFeature([AvaliationEntity])],
  controllers: [AvaliationController],
  providers: [AvaliationService],
  exports: [TypeOrmModule],
})
export class AvaliationModule {}
