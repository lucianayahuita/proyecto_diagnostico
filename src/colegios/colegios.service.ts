import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colegios } from 'src/entities/colegios.entity';

@Injectable()
export class ColegiosService {
  constructor(
    @InjectRepository(Colegios) // Inyectamos el repositorio de la entidad Colegio
    private readonly colegioRepository: Repository<Colegios>, // Repositorio de Colegio
  ) {}

  // Método para obtener todos los colegios
  async findAll(): Promise<Colegios[]> {
    return await this.colegioRepository.find(); // Retorna todos los colegios
  }

  // Método para obtener un colegio por su ID
  async findOne(id_col: number): Promise<Colegios> { // Usamos 'id_col' como parámetro
    const colegio = await this.colegioRepository.findOne({ where: { id_col } }); // Corregido para usar 'id_col'
    if (!colegio) {
      throw new NotFoundException(`Colegio con ID ${id_col} no encontrado`); // Mensaje con 'id_col'
    }
    return colegio;
  }

  // Método para crear un nuevo colegio
  async create(data: Partial<Colegios>): Promise<Colegios> {
    console.log('📥 Recibido en servicio:', data);
    const nuevoColegio = this.colegioRepository.create(data); // Crea una nueva instancia de Colegio
    console.log('📝 Objeto a guardar:', nuevoColegio);
    return await this.colegioRepository.save(nuevoColegio); // Guarda el nuevo colegio en la base de datos
  }
}
