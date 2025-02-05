import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('carrera')
export class Carrera {
  @PrimaryGeneratedColumn()
  id_carrera: number;

  @Column({ length: 100 })
  carrera: string;
}
