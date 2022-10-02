import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { ValidateResponse } from './auth.interface';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  @Inject(AuthService)
  public readonly authService: AuthService;

  public async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> | never {
    const request: Request = context.switchToHttp().getRequest();
    const authorization: string = request.headers?.['authorization'];

    if (!authorization) {
      throw new UnauthorizedException();
    }

    const bearer: string[] = authorization.split(' ');
    if (bearer.length < 2) {
      throw new UnauthorizedException();
    }

    const token: string = bearer[1];
    const { status, userId }: ValidateResponse =
      await this.authService.validate(token);

    if (status !== HttpStatus.OK) {
      throw new UnauthorizedException();
    }

    request.user = userId;

    return true;
  }
}
