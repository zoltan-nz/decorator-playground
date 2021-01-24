import { App } from './app';

describe('App', () => {
  test('can create an instance without error', () => {
    const app = new App();
    expect(app).toBeTruthy();
  });

  test('initializing controllers and routes', () => {
    const app = new App();
    app.bootstrap();

    expect(app).toBeTruthy();
  });
});
