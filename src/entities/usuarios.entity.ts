import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('usuario') // Nombre de la tabla en la base de datos
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;
  
    @Column({ length: 100 })
    usuario: string;
  
    @Column({ length: 15 })
    password1: string;
}
