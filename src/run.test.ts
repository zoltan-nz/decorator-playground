import supertest from 'supertest';
import { App } from './app';
import { createServer } from 'net';

function getAvailablePort(port = 3456): Promise<number> {
  const server = createServer();
  return new Promise((resolve, reject) =>
    server
      .on('error', (error: { code: string }) => (error.code === 'EADDRINUSE' ? server.listen(++port) : reject(error)))
      .on('listening', () => server.close(() => resolve(port)))
      .listen(port)
  );
}

jest.mock('./common/logger-service');

describe('Run', () => {
  let port = 3456;
  let app: App;

  beforeAll(async () => {
    port = await getAvailablePort();
    app = new App(port);
    app.bootstrap();
  });

  test('GET /', async () => {
    const response = await supertest(app.expressApp).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ message: 'Hello World' }));
  });

  test('POST /', async () => {
    const response = await supertest(app.expressApp)
      .post('/')
      .set('content-type', 'application/json')
      .send({ message: 'Create World' });
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ message: 'Create World' }));
  });

  test('GET /demo', async () => {
    const response = await supertest(app.expressApp).get('/demo');
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ message: 'Hello Demo!' }));
  });

  test('POST /demo', async () => {
    const response = await supertest(app.expressApp)
      .post('/demo')
      .send({ message: 'Create Demo' })
      .set('Accept', 'application/json');
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify({ message: 'Create Demo' }));
  });
});
