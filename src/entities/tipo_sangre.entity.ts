import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
@Entity()
export class TipoSangre {
  @PrimaryGeneratedColumn()
  id_tiposang: number;

  @Column({ length: 10 })
  tipo: string;
}