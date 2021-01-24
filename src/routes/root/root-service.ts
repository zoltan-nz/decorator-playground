import { LoggerService } from '../../common/logger-service';

export class RootService {
  constructor(private logger = new LoggerService()) {}

  findAll() {
    this.logger?.log('findAll');
    return 'Hello World';
  }

  create(message: string) {
    this.logger?.log(`create: ${message}`);
    return message;
  }
}
