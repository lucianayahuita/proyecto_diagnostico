import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Carrera } from './carrera.entity';
import { Sexo } from './sexo.entity';
import { Nacionalidad } from './nacionalidad.entity';
import { TipoSangre } from './tipo_sangre.entity';
import { Colegios } from './colegios.entity';

@Entity('estudiante') // Nombre de la tabla en la base de datos
export class Estudiante {
    @PrimaryGeneratedColumn()
    id_estudiante: number;
  
    @Column({ length: 100 })
    nombre_completo: string;
  
    @Column({ type: 'date' })
    fecha_nacimiento: Date;
  
    @Column()
    ci: number;
  
    @Column({ length: 100 })
    gmail: string;
  
    @Column()
    telefono: number;
  
    @Column({ length: 40 })
    estado_civil: string;
  
    @Column({ length: 100 })
    direccion: string;
  
    @ManyToOne(() => Sexo)
    sexo: Sexo;
  
    @ManyToOne(() => TipoSangre)
    tipo_sangre: TipoSangre;
  
    @ManyToOne(() => Nacionalidad)
    nacionalidad: Nacionalidad;
  
    @ManyToOne(() => Carrera)
    carrera: Carrera;
  
    @ManyToOne(() => Colegios)
    colegio: Colegios;
}
