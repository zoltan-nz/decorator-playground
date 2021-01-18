import express, { json } from 'express';
import { Server } from 'http';
import 'reflect-metadata';
import { BaseController, IController } from './common/base-controller';
import { RootController } from './routes/root/root-controller';

export class DemoController extends BaseController {
  constructor() {
    super();
  }

  protected init() {
    this.router.get('/demo', (req, res) => res.json({}));
    this.router.post('/demo', (req, res) => res.json({}));
  }
}

export class App {
  expressApp = express();
  server: Server | undefined;
  private controllers: IController[] = [];

  constructor() {
    this.init();
  }

  init() {
    this.controllers = [new RootController(), new DemoController()];
    this.expressApp.use(json());
    this.controllers?.forEach(controller => {
      this.expressApp.use(controller.routes);
    });
  }

  async start() {
    return new Promise((resolve, reject) => {
      this.server = this.expressApp
        .listen(3000)
        .once('listening', () => {
          console.log('Server started on port 3000!');
          return resolve('started');
        })
        .once('error', reject);
    });
  }

  async stop() {
    return new Promise((resolve, reject) => {
      if (!this.server) {
        return resolve('exit');
      }
      this.server.close(resolve).once('error', reject);
    });
  }
}
