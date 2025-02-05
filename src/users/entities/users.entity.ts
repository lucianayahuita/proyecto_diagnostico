import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Nombre de la tabla en la base de datos
export class User {
  @PrimaryGeneratedColumn() // Genera una columna de ID autoincrementable
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
