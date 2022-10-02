import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AuthModule } from 'src/auth/auth.module';
import { ProductSvcClientOptions } from './product-svc.client.options';
import { ProductController } from './product.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        ...ProductSvcClientOptions,
      },
    ]),
    AuthModule,
  ],
  controllers: [ProductController],
})
export class ProductModule {}
