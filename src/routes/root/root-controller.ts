import { Request, RequestHandler, Response } from 'express';
import { BaseController } from '../../common/base-controller';
import { RootService } from '../../index';

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
