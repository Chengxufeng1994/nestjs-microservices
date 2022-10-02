import { Observable } from 'rxjs';

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

export class FindOneRequest {
  id: number;
}

export class FindOneResponse {
  status: number;
  error: string[];
  data: FineOneData;
}

export class DecreaseStockRequest {
  id: number;
}

export class DecreaseStockResponse {
  status: number;
  error: string[];
}

export interface ProductService {
  createProduct(CreateOrderRequest): Observable<CreateProductResponse>;
  findOne(FindOneRequest): Observable<FindOneResponse>;
  decreaseStock(DecreaseStockRequest): Observable<DecreaseStockResponse>;
}
