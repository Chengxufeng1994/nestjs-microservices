import { Observable } from 'rxjs';

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: number;
  error: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  error: string[];
  token: string;
}

export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  userId: string;
}

export interface AuthService {
  register(RegisterRequest): RegisterResponse;
  login(LoginRequest): LoginResponse;
  validate(ValidateRequest): Observable<ValidateResponse>;
}
