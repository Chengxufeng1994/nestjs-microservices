import {
  Body,
  Controller,
  Inject,
  Logger,
  OnModuleInit,
  Post,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AuthService,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from './auth.interface';

@Controller('auth')
export class AuthController implements OnModuleInit {
  private readonly logger = new Logger(AuthController.name);
  private authService: AuthService;

  constructor(@Inject('AUTH_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<AuthService>('AuthService');
  }

  @Post('register')
  private async register(
    @Body() body: RegisterRequest,
  ): Promise<RegisterResponse> {
    this.logger.debug(`body: ${JSON.stringify(body)}`);
    const response = await this.authService.register(body);
    return response;
  }

  @Post('login')
  private async login(@Body() body: LoginRequest): Promise<LoginResponse> {
    this.logger.debug(`body: ${JSON.stringify(body)}`);
    const response = await this.authService.login(body);
    return response;
  }
}
