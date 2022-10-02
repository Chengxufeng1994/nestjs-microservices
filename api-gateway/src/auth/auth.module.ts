import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AuthSvcClientOptions } from './auth-svc.client.options';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        ...AuthSvcClientOptions,
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
