import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelevantAreaEntity } from './entity/relevant_area.entity';
import { RelevantAreaController } from './relevant_area.controller';
import { RelevantAreaService } from './relevant_area.service';

@Module({
  imports: [TypeOrmModule.forFeature([RelevantAreaEntity])],
  controllers: [RelevantAreaController],
  providers: [RelevantAreaService],
})
export class RelevantAreaModule {}
