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

export interface OrderService {
  CreateOrder(CreateOrderRequest): CreateOrderResponse;
}
