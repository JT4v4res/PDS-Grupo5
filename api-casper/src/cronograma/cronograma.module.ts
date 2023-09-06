import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronogramaService } from './cronograma.service';
import { Cronograma } from './cronograma.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Cronograma])],
    controllers: [
    ],
    providers: [
        CronogramaService
    ], 
    exports: [
        TypeOrmModule
    ]
})
export class CronogramaModule {}