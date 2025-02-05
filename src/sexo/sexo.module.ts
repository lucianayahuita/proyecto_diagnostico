import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 Importar TypeORM
import { SexoController } from './sexo.controller';
import { SexoService } from './sexo.service';
import { Sexo } from '../entities/sexo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sexo])],//o de la entidad
  controllers: [SexoController],
  providers: [SexoService],
  exports: [SexoService],
})
export class SexoModule {}

