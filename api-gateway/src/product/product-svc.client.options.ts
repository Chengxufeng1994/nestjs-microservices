import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const ProductSvcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50053',
    package: 'product',
    protoPath: join(
      __dirname,
      '../../../microservices-proto/proto/product.proto',
    ),
  },
};
