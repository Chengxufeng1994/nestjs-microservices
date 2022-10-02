import {
  Body,
  Controller,
  Inject,
  Logger,
  OnModuleInit,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateOrderRequest,
  CreateOrderResponse,
  OrderService,
} from './order.interface';

@Controller('order')
export class OrderController implements OnModuleInit {
  private readonly logger: Logger = new Logger(OrderController.name);
  private orderService: OrderService;

  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.orderService = this.client.getService<OrderService>('OrderService');
  }

  @Post()
  @UseGuards(AuthGuard)
  private async createOrder(
    @Req() req: Request,
    @Body() createOrderRequest: CreateOrderRequest,
  ): Promise<CreateOrderResponse> {
    this.logger.debug('createOrderRequest: ', createOrderRequest);
    createOrderRequest.userId = <number>req.user;
    const response: CreateOrderResponse = await this.orderService.CreateOrder(
      createOrderRequest,
    );
    return response;
  }
}
