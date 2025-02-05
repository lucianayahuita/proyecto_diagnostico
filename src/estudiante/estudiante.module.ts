import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteController } from './estudiante.controller';
import { EstudianteService } from './estudiante.service';
import { Estudiante } from 'src/entities/estudiante.entity';
import { Carrera } from 'src/entities/carrera.entity';
import { Colegios } from 'src/entities/colegios.entity';
import { Nacionalidad } from 'src/entities/nacionalidad.entity';
import { Sexo } from 'src/entities/sexo.entity';
import { TipoSangre } from 'src/entities/tipo_sangre.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Estudiante, Carrera, Colegios, Nacionalidad, Sexo, TipoSangre]),
  ],
  controllers: [EstudianteController],
  providers: [EstudianteService],
})
export class EstudianteModule {}
