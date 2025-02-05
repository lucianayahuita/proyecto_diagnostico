import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nacionalidad } from 'src/entities/nacionalidad.entity';

@Injectable()
export class NacionalidadService {
  constructor(
    @InjectRepository(Nacionalidad) // Inyectamos el repositorio de la entidad Nacionalidad
    private readonly nacionalidadRepository: Repository<Nacionalidad>, // Repositorio de Nacionalidad
  ) {}

  // Método para obtener todas las nacionalidades
  async findAll(): Promise<Nacionalidad[]> {
    return await this.nacionalidadRepository.find(); // Retorna todas las nacionalidades
  }

  // Método para obtener una nacionalidad por su ID
  async findOne(id_nacionalidad: number): Promise<Nacionalidad> { // Usamos 'id_nacionalidad' como parámetro
    const nacionalidad = await this.nacionalidadRepository.findOne({ where: { id_nacionalidad } }); // Busca por id_nacionalidad
    if (!nacionalidad) {
      throw new NotFoundException(`Nacionalidad con ID ${id_nacionalidad} no encontrada`); // Mensaje de error
    }
    return nacionalidad;
  }

  // Método para crear una nueva nacionalidad
  async create(data: Partial<Nacionalidad>): Promise<Nacionalidad> {
    console.log('📥 Recibido en servicio:', data);
    const nuevaNacionalidad = this.nacionalidadRepository.create(data); // Crea una nueva instancia de Nacionalidad
    console.log('📝 Objeto a guardar:', nuevaNacionalidad);
    return await this.nacionalidadRepository.save(nuevaNacionalidad); // Guarda la nueva nacionalidad
  }
}
