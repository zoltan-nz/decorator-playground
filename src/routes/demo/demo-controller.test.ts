import express, { json } from 'express';
import supertest from 'supertest';
import { DemoController } from './demo-controller';

describe('DemoController', () => {
  const controller = new DemoController();

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should setup routes', async () => {
    const app = express().use(controller.routes);
    const responseGet = await supertest(app).get('/demo');
    expect(responseGet.status).not.toEqual(404);
    const responsePost = await supertest(app).post('/demo');
    expect(responsePost.status).not.toEqual(404);
  });

  test('index should return "Hello World!"', async () => {
    const app = express().use(controller.index);
    const response = await supertest(app).get('/');
    expect(response.body).toEqual({ message: 'Hello Demo!' });
  });

  test('create should return 400 when no message or invalid json provided', async () => {
    const app = express().use(controller.create);
    const response = await supertest(app).post('/');
    expect(response.status).toBe(400);
  });

  test('create should return posted message', async () => {
    const app = express().use(json(), controller.create);
    const response = await supertest(app).post('/').send({ message: 'Dummy text' });
    expect(response.body).toEqual({ message: 'Dummy text' });
  });
});
