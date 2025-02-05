import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { ColegiosService } from './colegios.service';
import { Colegios } from 'src/entities/colegios.entity';

@Controller('colegio') // Ruta base para el controlador de Colegio
export class ColegiosController {
  constructor(private readonly colegiosService: ColegiosService) {} // Inyectamos el servicio

  // Obtener todos los colegios
  @Get('obtenerColegio')
  async findAll(): Promise<Colegios[]> {
    return await this.colegiosService.findAll(); // Llamamos al servicio para obtener todos los colegios
  }

  // Obtener un colegio por su ID
  @Get(':id_col')
  async findOne(@Param('id_col') id_col: number): Promise<Colegios> {
    const colegio = await this.colegiosService.findOne(id_col); // Llamamos al servicio para obtener el colegio
    if (!colegio) {
      throw new NotFoundException(`Colegio con ID ${id_col} no encontrado`); // Si no se encuentra el colegio
    }
    return colegio;
  }

  // Crear un nuevo colegio
  @Post('crearColegio')
  async create(@Body() colegioData: Colegios): Promise<Colegios> {
    return await this.colegiosService.create(colegioData); // Llamamos al servicio para crear un nuevo colegio
  }
}
