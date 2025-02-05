import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/users.entity';
import { crearUsuarios } from './dto/crearUsuarios.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>, // Accede a la tabla de usuarios
  ) {}

  // Crear un nuevo usuario
  async create(createUserDto: crearUsuarios): Promise<User> {
    const user = this.usersRepository.create(createUserDto); // Crea una instancia de la entidad
    return this.usersRepository.save(user);  // Guarda el usuario en la base de datos
  }

  // Obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();  // Recupera todos los usuarios
  }

  async findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id } });  // Si no encuentra el usuario, devuelve null
  }
  
}
