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

  async findAll(): Promise<Sexo[]> {
    return await this.sexoRepository.find();
  }
  

  async findOne(id_sexo: number): Promise<Sexo> {
    const sexo = await this.sexoRepository.findOne({ where: { id_sexo } });
    if (!sexo) {
      throw new NotFoundException(`Sexo con ID ${id_sexo} no encontrado`);
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
