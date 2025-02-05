import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from 'src/entities/usuarios.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) // Inyectamos el repositorio de la entidad Usuario
    private readonly usuarioRepository: Repository<Usuario>, // Repositorio de Usuario
  ) {}

  // Método para obtener todos los usuarios
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find(); // Retorna todos los usuarios
  }

  // Método para obtener un usuario por su ID
  async findOne(id_usuario: number): Promise<Usuario> { // Usamos 'id_usuario' como parámetro
    const usuario = await this.usuarioRepository.findOne({ where: { id_usuario } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id_usuario} no encontrado`); // Mensaje de error si no se encuentra el usuario
    }
    return usuario;
  }

  // Método para crear un nuevo usuario
  async create(data: Partial<Usuario>): Promise<Usuario> {
    console.log('📥 Recibido en servicio:', data);
    const nuevoUsuario = this.usuarioRepository.create(data); // Crea una nueva instancia de Usuario
    console.log('📝 Objeto a guardar:', nuevoUsuario);
    return await this.usuarioRepository.save(nuevoUsuario); // Guarda el nuevo usuario
  }
}
