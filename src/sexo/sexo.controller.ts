import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { Sexo } from 'src/entities/sexo.entity';

@Controller('sexo') // Define la URL base para las peticiones
export class SexoController {
  constructor(private readonly sexoService: SexoService) {}

  @Get()
  findAll(): Promise<Sexo[]> {
    return this.sexoService.findAll(); // Llama al servicio para obtener todos los sexos
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Sexo> {
    return this.sexoService.findOne(id); // Obtiene un sexo por su ID
  }

  @Post()
  create(@Body() data: { sexo: string }): Promise<Sexo> {
    return this.sexoService.create(data);
  }
  
}
