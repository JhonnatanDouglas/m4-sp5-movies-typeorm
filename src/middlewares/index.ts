import { handleErrors } from './handdleErros.middleware';
import { verifyIdExists } from './verifyIdExists.middleware';
import { verifyMovieNameExists } from './verifyNameExists.middleware';
import { verifyBody } from './verifyBodyExists.middleware';
import { pagination } from './pagination.middleware';

export default {
  handleErrors,
  verifyIdExists,
  verifyBody,
  verifyMovieNameExists,
  pagination,
};
