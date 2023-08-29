import { z } from 'zod';
import { movieCreateSchema } from '../schemas';
import { Movie } from '../entities';
import { DeepPartial, Repository } from 'typeorm';

type MovieCreate = z.infer<typeof movieCreateSchema>;
type MovieRead = Array<Movie>;
type MovieUpdate = DeepPartial<Movie>;

type MovieRepo = Repository<Movie>;

export { MovieRead, MovieCreate, MovieUpdate, MovieRepo };
