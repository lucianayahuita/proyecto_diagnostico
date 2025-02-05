import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('nacionalidad')
export class Nacionalidad {
  @PrimaryGeneratedColumn()
  id_nacionalidad: number;

  @Column({ length: 20 })
  nacionalidad: string;
}
