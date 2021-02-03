import { Router } from 'express';

export interface IController {
  routes: Router;
}

export abstract class BaseController implements IController {
  protected router = Router();

  protected init() {
    throw new Error('Init method is not implemented');
  }

  get routes() {
    return this.router;
  }
}
