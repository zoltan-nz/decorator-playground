import { Request, Response } from 'express';
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

  create = async (
    req: Request<Record<'message', string>, Record<string, unknown>, { message: string }>,
    res: Response<{ message: string }>
  ): Promise<void> => {
    if (req.body?.message) {
      res.status(200);
      res.json({ message: req.body.message });
    } else {
      res.status(400).end();
    }
  };
}
