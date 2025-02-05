import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { Sexo } from 'src/entities/sexo.entity';

@Controller('sexo') // 👈 Asegúrate de que la ruta base es "/sexo"
export class SexoController {
  constructor(private readonly sexoService: SexoService) {}

  @Get('obtenerTodosSexos')
  async findAll(): Promise<Sexo[]> {
    return await this.sexoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Sexo> {
    const sexo = await this.sexoService.findOne(id);
    if (!sexo) {
      throw new NotFoundException(`Sexo con ID ${id} no encontrado`);
    }
    return sexo;
  }

  @Post('crearsexo')
  async create(@Body() sexoData: Sexo): Promise<Sexo> {
    return await this.sexoService.create(sexoData);
  }
}
