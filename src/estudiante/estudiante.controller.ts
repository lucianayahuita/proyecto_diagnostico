import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { Estudiante } from 'src/entities/estudiante.entity';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Get('obtenerTodos')
  async findAll(): Promise<Estudiante[]> {
    return await this.estudianteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Estudiante> {
    const estudiante = await this.estudianteService.findOne(id);
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id} no encontrado`);
    }
    return estudiante;
  }

  @Post('crearEstudiante')
  async create(@Body() estudianteData: Estudiante): Promise<Estudiante> {
    return await this.estudianteService.create(estudianteData);
  }
}
