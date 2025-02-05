import { Module } from '@nestjs/common';
import { NacionalidadController } from './nacionalidad.controller';
import { NacionalidadService } from './nacionalidad.service';

@Module({
  controllers: [NacionalidadController],
  providers: [NacionalidadService]
})
export class NacionalidadModule {}
