import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sexo } from 'src/entities/sexo.entity';

@Injectable()
export class SexoService {
  constructor(
    @InjectRepository(Sexo)
    private readonly sexoRepository: Repository<Sexo>,
  ) {}

  findAll(): Promise<Sexo[]> {
    return this.sexoRepository.find();
  }

  async findOne(id: number): Promise<Sexo> {
    const sexo = await this.sexoRepository.findOne({ where: { id_sexo: id } });
    if (!sexo) {
      throw new NotFoundException(`Sexo con ID ${id} no encontrado`);
    }
    return sexo;
  }

  async create(data: Partial<Sexo>): Promise<Sexo> {
    console.log('📥 Recibido en servicio:', data);
    const nuevoSexo = this.sexoRepository.create(data);
    console.log('📝 Objeto a guardar:', nuevoSexo);
    return await this.sexoRepository.save(nuevoSexo);
  }
  
}
