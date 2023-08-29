import { Router } from 'express';
import movieControllers from '../controllers/movie.controllers';
import middlewares from '../middlewares';
import { movieCreateSchema, movieUpdateSchema } from '../schemas';

export const movieRouter: Router = Router();

movieRouter.post(
  '',
  middlewares.verifyBody(movieCreateSchema),
  middlewares.verifyMovieNameExists,
  movieControllers.create
);

movieRouter.get('', middlewares.pagination, movieControllers.read);

movieRouter.use('/:id', middlewares.verifyIdExists);

movieRouter.patch(
  '/:id',
  middlewares.verifyBody(movieUpdateSchema),
  middlewares.verifyMovieNameExists,
  movieControllers.partialUpdate
);

movieRouter.delete('/:id', movieControllers.destroy);
