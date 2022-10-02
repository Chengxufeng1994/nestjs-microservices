import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  AuthService as AuthServiceGrpc,
  ValidateResponse,
} from './auth.interface';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private authSvc: AuthServiceGrpc;

  constructor(@Inject('AUTH_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.authSvc = this.client.getService<AuthServiceGrpc>('AuthService');
  }

  public async validate(token: string): Promise<ValidateResponse> {
    this.logger.debug(`token: ${token}`);
    const result = firstValueFrom<ValidateResponse>(
      this.authSvc.validate({ token }),
    );
    return result;
  }
}
