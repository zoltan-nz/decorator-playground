import { Logger } from './index';

describe('Logger', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Logger', () => {
    const logger = new Logger();
    logger.log('test');
    expect(console.log).toHaveBeenCalledWith('test');
  });
})
