import { NextFunction, Request, RequestHandler, Response } from 'express';
import { BaseController } from '../../common/base-controller';
import { RootService } from './root-service';

export class RootController extends BaseController {
  constructor(private service = new RootService()) {
    super();
    this.init();
  }

  protected init() {
    this.router.get('/', this.index);
    this.router.post('/', this.create);
  }

  index = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200);
    res.json({ message: this.service?.findAll() });
  };

  create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200);
    res.json({ message: this.service?.create(req.body.message) });
  };
}
