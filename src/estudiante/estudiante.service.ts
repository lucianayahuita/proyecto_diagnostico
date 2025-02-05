import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from 'src/entities/estudiante.entity';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  // Método para obtener todos los estudiantes
  async findAll(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find({
      relations: ['sexo', 'tipo_sangre', 'nacionalidad', 'carrera', 'colegio'],
    });
  }

  // Método para obtener un estudiante por su ID
  async findOne(id_estudiante: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOne({
      where: { id_estudiante },
      relations: ['sexo', 'tipo_sangre', 'nacionalidad', 'carrera', 'colegio'],
    });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante con ID ${id_estudiante} no encontrado`);
    }
    return estudiante;
  }

  // Método para crear un nuevo estudiante
  async create(data: Partial<Estudiante>): Promise<Estudiante> {
    const nuevoEstudiante = this.estudianteRepository.create(data);
    return await this.estudianteRepository.save(nuevoEstudiante);
  }
}
