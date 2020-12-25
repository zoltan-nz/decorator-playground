import { App, Logger, RootController, RootService } from './index';

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

describe('RootService', () => {
  test('findAll', () => {
    const service = new RootService();
    expect(service.findAll()).toEqual('Hello World')
  })
});
