import { exit } from 'process';
import 'reflect-metadata';
import { App } from './app';

(async () => {
  const app = new App();
  app.bootstrap();

  try {
    await app.start();
  } catch (err) {
    console.error(err);
    exit(1)
    throw err;
  }
})();
