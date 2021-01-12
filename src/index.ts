import express, { json, Request, RequestHandler, Response, Router } from 'express';
import { Server } from 'http';
import 'reflect-metadata';

export class Logger {
  constructor() {}

  log(message: string) {
    console.log(message);
  }
}

export class RootService {
  constructor(private logger = new Logger()) {}

  findAll() {
    this.logger?.log('findAll');
    return 'Hello World';
  }

  create() {
    this.logger?.log('create');
    return 'Create World';
  }
}

interface IController {
  routes: Router;
}

export class BaseController implements IController {
  protected router = Router();

  constructor() {
    this.init();
  }

  protected init() {}

  get routes() {
    return this.router;
  }
}

export class RootController extends BaseController {
  constructor(private service = new RootService()) {
    super();
  }

  protected init() {
    this.router.get('/', this.index());
    this.router.post('/', this.create());
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
}

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
