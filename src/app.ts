import express, { json, RequestHandler } from 'express';
import { Server } from 'http';
import 'reflect-metadata';
import { IController } from './common/base-controller';
import { DemoController } from './routes/demo/demo-controller';
import { RootController } from './routes/root/root-controller';

export class App {
  expressApp = express();
  server: Server | undefined;
  controllers: IController[] = [new RootController(), new DemoController()];
  middlewares: RequestHandler[] = [json()];

  constructor(public port = 3000) {}

  bootstrap() {
    this.middlewares?.forEach((middleware) => {
      this.expressApp.use(middleware);
    });

    this.controllers?.forEach((controller) => {
      this.expressApp.use(controller.routes);
    });
  }

  async start() {
    return new Promise((resolve, reject) => {
      this.server = this.expressApp
        .listen(this.port)
        .once('listening', () => {
          console.log(`Server started on port ${this.port}`);
          return resolve('started');
        })
        .once('error', reject);
    });
  }

  async shutdown() {
    return new Promise((resolve, reject) => {
      if (!this.server) {
        return resolve('exit');
      }
      this.server.close(resolve).once('error', reject);
    });
  }

  addControllers(controllers: IController[]) {
    this.controllers.push(...controllers);
  }

  addMiddlewares(middlewares: RequestHandler[]) {
    this.middlewares.push(...middlewares);
  }
}
