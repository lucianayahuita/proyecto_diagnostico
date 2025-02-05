import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // 👈 Importamos UsersModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'pepe',
      autoLoadEntities: true,  // 👈 Carga automáticamente todas las entidades
      synchronize: true,       // 👈 Solo para desarrollo (crea/modifica tablas automáticamente)
    }),
    UsersModule, // 👈 Importamos el módulo de usuarios
  ],
})
export class AppModule {}
