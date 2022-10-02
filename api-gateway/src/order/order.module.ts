import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AuthModule } from 'src/auth/auth.module';
import { OrderSvcClientOptions } from './order-svc.client.options';
import { OrderController } from './order.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_SERVICE',
        ...OrderSvcClientOptions,
      },
    ]),
    AuthModule,
  ],
  controllers: [OrderController],
})
export class OrderModule {}
