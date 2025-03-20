import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { ClicksService } from './click.service';
import { AsyncApiPub, AsyncApiSub } from 'nestjs-asyncapi';
import { ClickResponse } from './dto/gateway-click.dto';
import { CreateClickDto } from './dto/create-click.dto';

@Injectable()
@WebSocketGateway({ cors: true })
export class ClicksGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(private readonly clicksService: ClicksService) {}

  afterInit(_server: Server) {
    console.log('WebSocket Server initialized');
  }

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  @AsyncApiSub({
    channel: 'click',
    message: {
      name: 'click',
      payload: CreateClickDto,
    },
  })
  @AsyncApiPub({
    channel: 'click',
    message: {
      name: 'click',
      payload: ClickResponse,
    },
  })
  @SubscribeMessage('click')
  async create(
    client: Socket,
    payload: CreateClickDto,
  ): Promise<ClickResponse> {
    try {
      await this.clicksService.create(payload);
      client.to(client.id).emit('clickResponse', { status: 'ok' });
      return { status: 'ok' };
    } catch {
      client.to(client.id).emit('clickResponse', { status: 'error' });
      return { status: 'error' };
    }
  }
}
