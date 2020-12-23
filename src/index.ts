import express, { json, Request, Response, Router } from 'express';
import 'reflect-metadata';

export class Logger {
  readonly #instance: Logger | undefined = undefined;

  constructor() {
    if (this.#instance) {
      return this.#instance;
    }
    this.#instance = this;
  }

  log(message: string) {
    console.log(message);
  }
}

class RootService {
  logger = new Logger();

  findAll() {
    this.logger.log('findAll');
    return 'Hello World';
  }

  create() {
    this.logger.log('create')
    return 'Create World'
  }
}

class RootController {
  router = Router();
  service = new RootService();

  constructor() {
    this.init();
  }

  init() {
    this.router.get('/', this.index());
    this.router.post('/', this.create())
  }

  index() {
    return (req: Request, res: Response) => {
      res.json({
        message: this.service.findAll()
      });
    };
  }

  create() {
    return (req: Request, res: Response) => {
      res.json({
        message: this.service.create()
      });
    };
  }

  getRoutes() {
    return this.router;
  }

}


const app = express();
const rootController = new RootController();
app.use(json());
app.use(rootController.getRoutes());
app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
