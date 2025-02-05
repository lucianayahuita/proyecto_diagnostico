import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar TypeORM
import { TipoSangreController } from './tipo_sangre.controller'; // Importar el controlador de TipoSangre
import { TipoSangreService } from './tipo_sangre.service'; // Importar el servicio de TipoSangre
import { TipoSangre } from 'src/entities/tipo_sangre.entity'; // Importar la entidad TipoSangre

@Module({
  imports: [TypeOrmModule.forFeature([TipoSangre])], // Importar la entidad TipoSangre en TypeORM
  controllers: [TipoSangreController], // Registrar el controlador
  providers: [TipoSangreService], // Registrar el servicio
  exports: [TipoSangreService], // Exportar el servicio para que pueda ser utilizado en otros módulos
})
export class TipoSangreModule {}
