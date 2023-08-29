import { Movie } from '../entities';
import {
  MovieCreate,
  MovieRead,
  MovieUpdate,
  Pagination,
  PaginationParams,
} from '../interfaces';
import { movieRepo } from '../repositories';

const create = async (body: MovieCreate): Promise<Movie> => {
  return await movieRepo.save(body);
};

const read = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<Pagination> => {
  const [movies, count]: Array<MovieRead | number> =
    await movieRepo.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

const partialUpdate = async (
  movie: Movie,
  body: MovieUpdate
): Promise<Movie> => {
  return await movieRepo.save({ ...movie, ...body });
};

const destroy = async (product: Movie): Promise<void> => {
  await movieRepo.remove(product);
};

export default { create, partialUpdate, read, destroy };
