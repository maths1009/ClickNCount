import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AsyncApiDocumentBuilder, AsyncApiModule } from 'nestjs-asyncapi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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

  await app.listen(3001);
}

void bootstrap();
