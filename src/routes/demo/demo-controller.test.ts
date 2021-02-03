import express from 'express';
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
    expect(responseGet.status).toBe(200);
    const responsePost = await supertest(app).post('/demo');
    expect(responsePost.status).toBe(200);
  });

  test('index should return "Hello World!"', async () => {
    const app = express().use(controller.index);
    const response = await supertest(app).get('/')
    expect(response.body).toBe({ message: 'Hello World!' });
  });
});
