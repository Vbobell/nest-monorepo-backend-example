import { NestFactory } from '@nestjs/core';
import { SwapiModule } from './swapi.module';

async function bootstrap() {
  const app = await NestFactory.create(SwapiModule);
  await app.listen(5001);
}
bootstrap();
