import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 Importar TypeORM
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/users.entity'; // 👈 Importar la entidad User

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 👈 Registro de la entidad
  controllers: [UsersController],
  providers: [UsersService],  
  exports: [UsersService],    
})
export class UsersModule {}
