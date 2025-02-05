import { Module } from '@nestjs/common';
import { TipoSangreController } from './tipo_sangre.controller';
import { TipoSangreService } from './tipo_sangre.service';

@Module({
  controllers: [TipoSangreController],
  providers: [TipoSangreService]
})
export class TipoSangreModule {}
