import { RootService } from './root-service';

jest.mock('../../common/logger-service');

describe('RootService', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('findAll', () => {
    const service = new RootService();
    expect(service.findAll()).toEqual('Hello World');
    expect(service['logger'].log).toHaveBeenCalledWith('findAll');
  });
});
