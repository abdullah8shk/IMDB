let initialState = {
  movies: [],
  tvshows: [],
  movie:[],
  tvshow:[],
};

export let appReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));
  console.log("Current State",stateCopy);
  switch (action.type) {
    case 'movies':
      stateCopy.movies = [...stateCopy.movies,...action.payLoad];
      return stateCopy;

    case 'tvshows':
      stateCopy.tvshows = [...stateCopy.tvshows,...action.payLoad];
      return stateCopy;

      case 'clickedMovie':
        stateCopy.movie = action.payLoad;
        return stateCopy;

        case 'clickedTvshow':
          stateCopy.tvshow = stateCopy.tvshows[action.payLoad];
          return stateCopy;

    default:
      return stateCopy;
  }
};
