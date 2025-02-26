import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const cors = require('cors');
  app.use(cors(
    {
      "origin":true,
      "methods":"GET,HEAD,PUT,PATCH,POST,DELETE", 
      "preflightContinue":false,
       credentials:true
    }
  ));
  await app.listen(3000);
}
bootstrap();
