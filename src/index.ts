import express, { json, Request, Response, Router } from 'express';
import 'reflect-metadata';

class RootController {
  router: Router = Router();

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
        message: 'Hello World!'
      });
    };
  }

  create() {
    return (req: Request, res: Response) => {
      res.json({
        message: 'Create World!'
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
