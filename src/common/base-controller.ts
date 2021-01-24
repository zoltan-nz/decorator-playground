import { Router } from 'express';

export interface IController {
  routes: Router;
}

export class BaseController implements IController {
  protected router = Router();

  constructor() {}

  get routes() {
    return this.router;
  }
}
