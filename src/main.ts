import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilita CORS para permitir peticiones desde el frontend
  app.enableCors();

  await app.listen(3000);
  console.log(`🚀 Server is running on http://localhost:3000`);
}
bootstrap();
