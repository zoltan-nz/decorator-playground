import { LoggerService } from './logger-service';

describe('Logger', () => {
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(async () => {
    jest.restoreAllMocks();
  });

  test('Logger', () => {
    const logger = new LoggerService();
    logger.log('test');
    expect(console.log).toHaveBeenCalledWith('test');
  });
});
