import supertest from 'supertest';
import { App, RootService } from './index';

describe('RootService', () => {
  test('findAll', () => {
    const service = new RootService();
    expect(service.findAll()).toEqual('Hello World');
  });
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
