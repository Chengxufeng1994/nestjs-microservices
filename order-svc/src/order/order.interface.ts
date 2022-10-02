import { Observable } from 'rxjs';

export class CreateOrderRequest {
  productId: number;
  quantity: number;
  userId: number;
}

export class CreateOrderResponse {
  status: number;
  error: string[];
  id: number;
}

export class CreateProductRequest {
  name: string;
  sku: string;
  stock: number;
  price: number;
}

export class CreateProductResponse {
  status: number;
  error: string[];
  id: number;
}

export interface FineOneData {
  id: number;
  name: string;
  sku: string;
  stock: number;
  price: number;
}

export class FindOneResponse {
  status: number;
  error: string[];
  data: FineOneData;
}

export class DecreaseStockRequest {
  id: number;
  orderId: number;
}

export class DecreaseStockResponse {
  status: number;
  error: string[];
}

export interface ProductServiceClient {
  createProduct(CreateOrderRequest): Observable<CreateProductResponse>;
  findOne(FindOneRequest): Observable<FindOneResponse>;
  decreaseStock(DecreaseStockRequest): Observable<DecreaseStockResponse>;
}
