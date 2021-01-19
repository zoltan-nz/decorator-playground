import supertest from 'supertest';
import { App } from './app';
import { LoggerService } from './common/logger-service';

jest.mock('./common/logger-service');

describe('App', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('GET /', async () => {
    const app = new App();
    const response = await supertest(app.expressApp).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ message: 'Hello World' }));
    expect(LoggerService).toHaveBeenCalledTimes(1);
  });

  test('POST /', async () => {
    const app = new App();
    const response = await supertest(app.expressApp).post('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ message: 'Create World' }));
    expect(LoggerService).toHaveBeenCalledTimes(1);
  });

  test('GET /demo', async () => {
    const app = new App();
    const response = await supertest(app.expressApp).get('/demo');
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({}));
  });

  test('POST /demo', async () => {
    const app = new App();
    const response = await supertest(app.expressApp).post('/demo');
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({}));
  });
});
