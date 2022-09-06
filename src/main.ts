import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('CRUD Test Task')
    .setDescription("The REST API's for CRUD Test Task")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: ['http://localhost:4200', 'https://prod.d1eah2gbyx9a4z.amplifyapp.com'],
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
