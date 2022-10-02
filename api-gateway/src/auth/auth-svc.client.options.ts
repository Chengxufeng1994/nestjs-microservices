import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const AuthSvcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: 'auth',
    protoPath: join(__dirname, '../../../microservices-proto/proto/auth.proto'),
  },
};
