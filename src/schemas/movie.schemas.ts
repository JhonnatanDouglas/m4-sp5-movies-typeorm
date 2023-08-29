import { z } from 'zod';

const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().int().positive(),
});

const movieCreateSchema = movieSchema.omit({ id: true });
const movieUpdateSchema = movieSchema.partial();

export { movieCreateSchema, movieUpdateSchema };
