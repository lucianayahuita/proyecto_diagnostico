import { Controller, Get, Param, Post, Body, NotFoundException } from '@nestjs/common';
import { TipoSangreService } from './tipo_sangre.service';
import { TipoSangre } from 'src/entities/tipo_sangre.entity';

@Controller('tipo_sangre') // Ruta base para el controlador de TipoSangre
export class TipoSangreController {
  constructor(private readonly tipoSangreService: TipoSangreService) {} // Inyectamos el servicio

  // Obtener todos los tipos de sangre
  @Get('obtenerTodosTiposSangre')
  async findAll(): Promise<TipoSangre[]> {
    return await this.tipoSangreService.findAll(); // Llamamos al servicio para obtener todos los tipos de sangre
  }

  // Obtener un tipo de sangre por su ID
  @Get(':id_tiposang')
  async findOne(@Param('id_tiposang') id_tiposang: number): Promise<TipoSangre> {
    const tipoSangre = await this.tipoSangreService.findOne(id_tiposang); // Llamamos al servicio para obtener el tipo de sangre
    if (!tipoSangre) {
      throw new NotFoundException(`Tipo de Sangre con ID ${id_tiposang} no encontrado`); // Si no se encuentra el tipo de sangre
    }
    return tipoSangre;
  }

  // Crear un nuevo tipo de sangre
  @Post('crearTipoSangre')
  async create(@Body() tipoSangreData: TipoSangre): Promise<TipoSangre> {
    return await this.tipoSangreService.create(tipoSangreData); // Llamamos al servicio para crear un nuevo tipo de sangre
  }
}
