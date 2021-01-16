import { Router } from 'express';

export interface IController {
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
