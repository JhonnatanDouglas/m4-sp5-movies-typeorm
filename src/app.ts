import 'express-async-errors';
import express, { Application } from 'express';
import middlewares from './middlewares';
import { movieRouter } from './routers';

const app: Application = express();
app.use(express.json());

app.use('/movies', movieRouter);

app.use(middlewares.handleErrors);
export default app;
