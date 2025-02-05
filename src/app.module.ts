import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SexoModule } from './sexo/sexo.module';
import { CarreraModule } from './carrera/carrera.module';
import { ColegiosModule } from './colegios/colegios.module';
import { NacionalidadModule } from './nacionalidad/nacionalidad.module';
import { TipoSangreModule } from './tipo_sangre/tipo_sangre.module';
import { UsuarioModule } from './usuarios/usuarios.module';
import { EstudianteModule } from './estudiante/estudiante.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'registro',
      autoLoadEntities: true,
      synchronize: true,
    }),
    SexoModule, // 👈 Asegúrate de que está aquí
    CarreraModule,
    ColegiosModule,
    NacionalidadModule,
    TipoSangreModule,
    UsuarioModule,
    EstudianteModule
  ],
})
export class AppModule {}

