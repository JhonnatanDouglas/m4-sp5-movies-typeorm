import { NextFunction, Request, Response } from 'express';
import { Movie } from '../entities';
import { movieRepo } from '../repositories';
import { AppError } from '../errors';

export const verifyMovieNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieName: Movie | null = await movieRepo.findOneBy({
    name: req.body.name,
  });

  if (movieName) throw new AppError('Movie already exists.', 409);

  return next();
};
