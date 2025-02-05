import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity('sexo')
export class Sexo {
  @PrimaryGeneratedColumn()
  id_sexo: number;

  @Column({ length: 30 })
  sexo: string;
}