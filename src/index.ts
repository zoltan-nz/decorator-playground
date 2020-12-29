import 'reflect-metadata';
import express, { json, Request, RequestHandler, Response, Router } from 'express';
import { Server } from 'http';
import { autoInjectable, inject, singleton } from 'tsyringe';

@singleton()
export class Logger {
  constructor() {}

  log(message: string) {
    console.log(message);
  }
}

@autoInjectable()
@singleton()
export class RootService {
  constructor(private logger?: Logger) {}

  findAll() {
    this.logger?.log('findAll');
    return 'Hello World';
  }

  create() {
    this.logger?.log('create');
    return 'Create World';
  }
}

@autoInjectable()
export class RootController {
  #router = Router();

  constructor(private service?: RootService) {
    this.init();
  }

  init() {
    this.#router.get('/', this.index());
    this.#router.post('/', this.create());
  }

  index(): RequestHandler {
    return (req: Request, res: Response) => {
      res.json({
        message: this.service?.findAll(),
      });
    };
  }

  create() {
    return (req: Request, res: Response) => {
      res.json({
        message: this.service?.create(),
      });
    };
  }

  getRoutes() {
    return this.#router;
  }
}

export class App {
  expressApp = express();
  rootController = new RootController();
  server: Server | undefined;

  constructor() {
    this.init();
  }

  init() {
    this.expressApp.use(json());
    this.expressApp.use(this.rootController.getRoutes());
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
