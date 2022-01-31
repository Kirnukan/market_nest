import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const config = new ConfigService();
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  await app.listen(+config.get('APP_PORT'));
  console.log(`Server started on port ${config.get('APP_PORT')} ...`);
}
bootstrap();
