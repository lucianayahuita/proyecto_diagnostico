import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoSangre } from 'src/entities/tipo_sangre.entity';

@Injectable()
export class TipoSangreService {
  constructor(
    @InjectRepository(TipoSangre) // Inyectamos el repositorio de la entidad TipoSangre
    private readonly tipoSangreRepository: Repository<TipoSangre>, // Repositorio de TipoSangre
  ) {}

  // Método para obtener todos los tipos de sangre
  async findAll(): Promise<TipoSangre[]> {
    return await this.tipoSangreRepository.find(); // Retorna todos los tipos de sangre
  }

  // Método para obtener un tipo de sangre por su ID
  async findOne(id_tiposang: number): Promise<TipoSangre> { // Usamos 'id_tiposang' como parámetro
    const tipoSangre = await this.tipoSangreRepository.findOne({ where: { id_tiposang } }); // Busca por id_tiposang
    if (!tipoSangre) {
      throw new NotFoundException(`Tipo de Sangre con ID ${id_tiposang} no encontrado`); // Mensaje de error
    }
    return tipoSangre;
  }

  // Método para crear un nuevo tipo de sangre
  async create(data: Partial<TipoSangre>): Promise<TipoSangre> {
    console.log('📥 Recibido en servicio:', data);
    const nuevoTipoSangre = this.tipoSangreRepository.create(data); // Crea una nueva instancia de TipoSangre
    console.log('📝 Objeto a guardar:', nuevoTipoSangre);
    return await this.tipoSangreRepository.save(nuevoTipoSangre); // Guarda el nuevo tipo de sangre
  }
}
