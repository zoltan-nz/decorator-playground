import { App, Logger } from './index';

describe('Logger', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterAll(async () => {
    jest.restoreAllMocks();
  });

  test('Logger', () => {
    const logger = new Logger();
    logger.log('test');
    expect(console.log).toHaveBeenCalledWith('test');
  });
})
