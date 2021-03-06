import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || 1337;
  const appName = process.env.APP_NAME || 'NestJsApp';
  await app.listen(port);
  Logger.log(`🚀 Server running on port :${port}`, `${appName}`);
}
bootstrap();
