import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar TypeORM
import { UsuarioController } from './usuarios.controller'; // Cambiar la ruta a 'usuarios.controller'
import { UsuarioService } from './usuarios.service'; // Cambiar la ruta a 'usuarios.service'
import { Usuario } from 'src/entities/usuarios.entity'; // Cambiar la ruta a 'usuarios.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], // Importar la entidad Usuario en TypeORM
  controllers: [UsuarioController], // Registrar el controlador
  providers: [UsuarioService], // Registrar el servicio
  exports: [UsuarioService], // Exportar el servicio para que pueda ser utilizado en otros módulos
})
export class UsuarioModule {}

