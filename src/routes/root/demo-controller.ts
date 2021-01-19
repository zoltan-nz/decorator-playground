import { BaseController } from '../../common/base-controller';

export class DemoController extends BaseController {
  constructor() {
    super();
  }

  protected init() {
    this.router.get('/demo', (req, res) => res.json({}));
    this.router.post('/demo', (req, res) => res.json({}));
  }
}
