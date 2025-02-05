import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar TypeORM
import { NacionalidadController } from './nacionalidad.controller'; // Importar el controlador de Nacionalidad
import { NacionalidadService } from './nacionalidad.service'; // Importar el servicio de Nacionalidad
import { Nacionalidad } from 'src/entities/nacionalidad.entity'; // Importar la entidad Nacionalidad

@Module({
  imports: [TypeOrmModule.forFeature([Nacionalidad])], // Importar la entidad Nacionalidad en TypeORM
  controllers: [NacionalidadController], // Registrar el controlador
  providers: [NacionalidadService], // Registrar el servicio
  exports: [NacionalidadService], // Exportar el servicio para que pueda ser utilizado en otros módulos
})
export class NacionalidadModule {}
