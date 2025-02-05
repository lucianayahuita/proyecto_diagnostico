import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar TypeORM
import { CarreraController } from './carrera.controller'; 
import { CarreraService } from './carrera.service'; 
import { Carrera } from '../entities/carrera.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Carrera])], // Importar la entidad Carrera
  controllers: [CarreraController],
  providers: [CarreraService], 
  exports: [CarreraService], 
})
export class CarreraModule {}
