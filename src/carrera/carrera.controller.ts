import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { CarreraService } from './carrera.service'; 
import { Carrera } from 'src/entities/carrera.entity';

@Controller('carrera') // Ruta base correcta
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {} 

  @Get('obtenerCarrera')
  async findAll(): Promise<Carrera[]> { // 👈 Se debe retornar una lista de carreras
    return await this.carreraService.findAll(); // 👈 Método corregido
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Carrera> { 
    const carrera = await this.carreraService.findOne(id);
    if (!carrera) {
      throw new NotFoundException(`Carrera con ID ${id} no encontrada`);
    }
    return carrera;
  }

  @Post('crearCarrera')
  async create(@Body() carreraData: Carrera): Promise<Carrera> { // 👈 Cambio de `Sexo` a `Carrera`
    return await this.carreraService.create(carreraData);
  }
}
