import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { NacionalidadService } from './nacionalidad.service';
import { Nacionalidad } from 'src/entities/nacionalidad.entity';

@Controller('nacionalidad') // Ruta base para el controlador de Nacionalidad
export class NacionalidadController {
  constructor(private readonly nacionalidadService: NacionalidadService) {} // Inyectamos el servicio

  // Obtener todas las nacionalidades
  @Get('obtenerTodasNacionalidades')
  async findAll(): Promise<Nacionalidad[]> {
    return await this.nacionalidadService.findAll(); // Llamamos al servicio para obtener todas las nacionalidades
  }

  // Obtener una nacionalidad por su ID
  @Get(':id_nacionalidad')
  async findOne(@Param('id_nacionalidad') id_nacionalidad: number): Promise<Nacionalidad> {
    const nacionalidad = await this.nacionalidadService.findOne(id_nacionalidad); // Llamamos al servicio para obtener la nacionalidad
    if (!nacionalidad) {
      throw new NotFoundException(`Nacionalidad con ID ${id_nacionalidad} no encontrada`); // Si no se encuentra la nacionalidad
    }
    return nacionalidad;
  }

  // Crear una nueva nacionalidad
  @Post('crearNacionalidad')
  async create(@Body() nacionalidadData: Nacionalidad): Promise<Nacionalidad> {
    return await this.nacionalidadService.create(nacionalidadData); // Llamamos al servicio para crear una nueva nacionalidad
  }
}
