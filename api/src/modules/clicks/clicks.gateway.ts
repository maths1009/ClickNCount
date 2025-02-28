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
import { ClicksService } from './clicks.service';

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

  @SubscribeMessage('click')
  async handleClick(
    client: Socket,
    payload: { isAuto: boolean },
  ): Promise<void> {
    console.log('Click received:', payload);
    await this.clicksService.createClick(payload.isAuto);
    client.emit('clickResponse', { status: 'ok' });
  }
}
