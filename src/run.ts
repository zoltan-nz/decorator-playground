import 'reflect-metadata';
import { App } from './app';

(async () => {
  const app = new App();
  app.bootstrap();

  try {
    await app.start();
  } catch (err) {
    console.error(err);
    throw err;
  }
})();
