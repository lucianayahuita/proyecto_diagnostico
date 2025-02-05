import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { crearUsuarios } from './dto/crearUsuarios.dto'; // Se recomienda que los DTOs comiencen con mayúscula
import { User } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('crear') // 👈 CORREGIDO: ahora usa comillas simples en lugar de comillas invertidas
  create(@Body() createUserDto: crearUsuarios): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get('obtenerTodo')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<User | null> {  // Cambié el tipo de retorno
    return this.usersService.findOne(id); // Llama al servicio para obtener el usuario
  }
  
}
