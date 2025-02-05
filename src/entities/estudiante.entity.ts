import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Carrera } from './carrera.entity';
import { Colegios } from './colegios.entity';
import { Nacionalidad } from './nacionalidad.entity';
import { Sexo } from './sexo.entity';
import { TipoSangre } from './tipo_sangre.entity';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id_estudiante: number;

  @Column()
  nombre_completo: string;

  @Column()
  fecha_nacimiento: Date;

  @Column()
  ci: number;

  @Column()
  gmail: string;

  @Column()
  telefono: number;

  @Column()
  estado_civil: string;

  @Column()
  direccion: string;

  // Relaciones con otras entidades
  @ManyToOne(() => Sexo)
  @JoinColumn({ name: 'id_sexo' })
  sexo: Sexo;

  @ManyToOne(() => TipoSangre)
  @JoinColumn({ name: 'id_tiposang' })
  tipo_sangre: TipoSangre;

  @ManyToOne(() => Nacionalidad)
  @JoinColumn({ name: 'id_nacionalidad' })
  nacionalidad: Nacionalidad;

  @ManyToOne(() => Carrera)
  @JoinColumn({ name: 'carrera_id_carrera' })
  carrera: Carrera;

  @ManyToOne(() => Colegios)
  @JoinColumn({ name: 'colegios_id_col' })
  colegio: Colegios;
}
