import {
  Body,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OnModuleInit } from '@nestjs/common';
import { Controller, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  CreateProductRequest,
  CreateProductResponse,
  FindOneResponse,
  ProductService,
} from './product.interface';

@Controller('product')
export class ProductController implements OnModuleInit {
  private readonly logger: Logger = new Logger(ProductController.name);
  private productService: ProductService;

  constructor(@Inject('PRODUCT_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.productService =
      this.client.getService<ProductService>('ProductService');
  }

  @Post()
  @UseGuards(AuthGuard)
  private async createProduct(
    @Body() createProductRequest: CreateProductRequest,
  ): Promise<Observable<CreateProductResponse>> {
    this.logger.debug('createProductRequest: ', createProductRequest);

    const response = await this.productService.createProduct(
      createProductRequest,
    );
    return response;
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  private async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Observable<FindOneResponse>> {
    return this.productService.findOne({ id });
  }
}
