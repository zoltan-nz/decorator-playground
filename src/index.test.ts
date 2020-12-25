import supertest from "supertest";
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

describe('App', () => {
  test('GET /', async () => {
    const app = new App();
    const response = await supertest(app.expressApp).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ message: 'Hello World' }));
  });

  test('POST /', async () => {
    const app = new App();
    const response = await supertest(app.expressApp).post('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ message: 'Create World' }));
  });
})
