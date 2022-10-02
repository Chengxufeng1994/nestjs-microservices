import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const OrderSvcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50052',
    package: 'order',
    protoPath: join(
      __dirname,
      '../../../microservices-proto/proto/order.proto',
    ),
  },
};
