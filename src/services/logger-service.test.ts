import { LoggerService } from "./logger-service";

describe('Logger', () => {
  beforeEach(() => {
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
