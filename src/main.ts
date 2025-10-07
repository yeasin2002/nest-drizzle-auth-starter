/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { apiReference } from '@scalar/nestjs-api-reference';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('NestJS API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  app.getHttpAdapter().get('/openapi-json', (req, res) => {
    res.json(document);
  });

  app.use(
    '/scaler',
    apiReference({
      theme: 'deepSpace',
      // content: document,
      sources: [
        { title: 'nest', content: document, default: true },
        { title: 'Auth', url: '/api/auth/open-api/generate-schema' },
      ],
    }),
  );

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
// o /api/auth/reference
