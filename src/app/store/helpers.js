export const mergeComments = (movies, externalComments) => {
  return movies.map(movie => {
    const newComments = externalComments.filter(
      item => item.movieId === movie.id
    );
    if (newComments) {
      movie.comments.unshift(...newComments);
    }
    return movie;
  });
};
