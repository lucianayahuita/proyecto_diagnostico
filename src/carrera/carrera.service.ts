import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from 'src/entities/carrera.entity';

@Injectable()
export class CarreraService {
  constructor(
    @InjectRepository(Carrera) // Corregido el nombre del repositorio
    private readonly carreraRepository: Repository<Carrera>, // Corregido el tipo y el nombre del repositorio
  ) {}

  // Método para obtener todas las carreras
  async findAll(): Promise<Carrera[]> {
    return await this.carreraRepository.find(); // Corregido el nombre del repositorio
  }

  // Método para obtener una carrera por ID
  async findOne(id_carrera: number): Promise<Carrera> { // Especificado el tipo para el parámetro
    const carrera = await this.carreraRepository.findOne({ where: { id_carrera } }); // Corregido la llamada al repositorio
    if (!carrera) {
      throw new NotFoundException(`Carrera con ID ${id_carrera} no encontrada`); // Corregido el nombre y mensaje de error
    }
    return carrera;
  }

  // Método para crear una nueva carrera
  async create(data: Partial<Carrera>): Promise<Carrera> { // Especificado el tipo para `data`
    console.log('📥 Recibido en servicio:', data);
    const nuevaCarrera = this.carreraRepository.create(data); // Corregido el nombre de la variable
    console.log('📝 Objeto a guardar:', nuevaCarrera);
    return await this.carreraRepository.save(nuevaCarrera); // Corregido el nombre del repositorio
  }
}
