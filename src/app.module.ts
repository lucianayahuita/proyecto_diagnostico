import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // 👈 Importamos UsersModule
import { CarreraModule } from './carrera/carrera.module';
import { ColegiosModule } from './colegios/colegios.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';
import { SexoModule } from './sexo/sexo.module';
import { TipoSangreModule } from './tipo_sangre/tipo_sangre.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'registro',
      autoLoadEntities: true,  // 👈 Carga automáticamente todas las entidades
      synchronize: true,       // 👈 Solo para desarrollo (crea/modifica tablas automáticamente)
    }),
    UsersModule,
    CarreraModule,
    ColegiosModule,
    EstudianteModule,
    NacionalidadModule,
    SexoModule,
    TipoSangreModule,
    UsuariosModule, // 👈 Importamos el módulo de usuarios
  ],
})
export class AppModule {}
