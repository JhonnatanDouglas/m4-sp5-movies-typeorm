import { NextFunction, Request, Response } from 'express';
import { Movie } from '../entities';
import { movieRepo } from '../repositories';
import { AppError } from '../errors';

export const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundedMovie: Movie | null = await movieRepo.findOne({
    where: { id: Number(req.params.id) },
  });

  if (!foundedMovie) throw new AppError('Movie not found', 404);

  res.locals = { ...res.locals, foundedMovie };

  return next();
};
