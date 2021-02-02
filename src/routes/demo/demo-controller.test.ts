import express, { request, response } from "express";
import supertest from "supertest";
import { DemoController } from "./demo-controller";

describe('DemoController', () => {
  const controller = new DemoController();

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should setup routes', async () => {
    const app = express().use(controller.routes)
    supertest(app).get('/demo').expect(200)
    supertest(app).post('/demo').expect(200)
  });

  test('index should return "Hello World!"', async () => {
    const app = express().use(controller.index);
    supertest(app).get('/').expect({ message: 'Hello World!' });
  });
})
