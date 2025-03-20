import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AsyncApiDocumentBuilder, AsyncApiModule } from 'nestjs-asyncapi';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* WEBSOCKET DOC */
  const asyncApiOptions = new AsyncApiDocumentBuilder()
    .setTitle('ClicknCount WebSocket API')
    .setDescription('API documentation for ClicknCount WebSocket events')
    .setVersion('1.0')
    .setDefaultContentType('application/json')
    .addServer('clicknCount', {
      url: 'ws://localhost:3001',
      protocol: 'socket.io',
    })
    .build();
  const asyncapiDocument = AsyncApiModule.createDocument(app, asyncApiOptions);
  await AsyncApiModule.setup('/asyncapi', app, asyncapiDocument);

  /* HTTPS REQUEST DOC */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('ClicknCount API')
    .setDescription('API documentation for ClicknCount')
    .setVersion('1.0')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-docs', app, documentFactory);

  await app.listen(3001);
}

void bootstrap();
