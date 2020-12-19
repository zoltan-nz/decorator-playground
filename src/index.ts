import express, { json } from 'express';
import 'reflect-metadata';

const app = express();
app.use(json());

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

app.use(router);
app.listen(3000, () => {
  console.log('Server started on port 3000!');
});
