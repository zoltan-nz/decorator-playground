import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../../common/base-controller';

export class DemoController extends BaseController {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.router.get('/demo', this.index);
    this.router.post('/demo', this.create);
  }

  index = async (req: Request, res: Response): Promise<void> => {
    res.status(200);
    res.json({ message: 'Hello Demo!' });
  };

  create = async (req: Request<{}, {}, { message: string }>, res: Response<{ message: string }>): Promise<void> => {
    res.status(200);
    res.json({ message: req.body.message });
  };
}
