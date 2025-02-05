import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar TypeORM
import { ColegiosController } from './colegios.controller'; // Importar el controlador de Colegios
import { ColegiosService } from './colegios.service'; // Importar el servicio de Colegios
import { Colegios } from 'src/entities/colegios.entity'; // Importar la entidad de Colegios

@Module({
  imports: [TypeOrmModule.forFeature([Colegios])], // Importar la entidad Colegios en TypeORM
  controllers: [ColegiosController], // Registrar el controlador
  providers: [ColegiosService], // Registrar el servicio
  exports: [ColegiosService], // Exportar el servicio para que pueda ser utilizado en otros módulos
})
export class ColegiosModule {}
