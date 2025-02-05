import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('colegios')
export class Colegios {
  @PrimaryGeneratedColumn()
  id_col: number;

  @Column({ length: 100 })
  colegio: string;
}
