import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { UsuarioService } from './usuarios.service';
import { Usuario } from 'src/entities/usuarios.entity';

@Controller('usuario') // Ruta base para el controlador de Usuario
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {} // Inyectamos el servicio

  // Obtener todos los usuarios
  @Get('obtenerTodosUsuarios')
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioService.findAll(); // Llamamos al servicio para obtener todos los usuarios
  }

  // Obtener un usuario por su ID
  @Get(':id_usuario')
  async findOne(@Param('id_usuario') id_usuario: number): Promise<Usuario> {
    const usuario = await this.usuarioService.findOne(id_usuario); // Llamamos al servicio para obtener el usuario
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id_usuario} no encontrado`); // Si no se encuentra el usuario
    }
    return usuario;
  }

  // Crear un nuevo usuario
  @Post('crearUsuario')
  async create(@Body() usuarioData: Usuario): Promise<Usuario> {
    return await this.usuarioService.create(usuarioData); // Llamamos al servicio para crear un nuevo usuario
  }
}
