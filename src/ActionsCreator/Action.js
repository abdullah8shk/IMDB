import axios from 'axios';

let Api_Key = '55ff3243f0b5669f74c596ac03fdb846';

export function moviesFunction(page) {
  let movies = axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}&language=en-US&page=${page}`
  );
  return dispatch => {
    movies
      .then(res => {
        // console.log("Movies",res)
        dispatch({ type: 'movies', payLoad: res.data.results });
      })
      .catch('error');
  };
}

export function tvshowsFunction(page) {
  let tvshows = axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${Api_Key}&language=en-US&page=${page}`
  );
  return dispatch => {
    tvshows
      .then(res => {
        //console.log("Tvshows",res)
        dispatch({ type: 'tvshows', payLoad: res.data.results });
      })
      .catch('error');
  };
}

export function clickedMovie(ID){
  let movies = axios.get(
    `https://api.themoviedb.org/3/movie/${ID}?api_key=${Api_Key}&language=en-US`
  );
  return dispatch => {
    movies
      .then(res => {console.log("response",res)
        dispatch({ type: 'clickedMovie', payLoad: res.data });
      })
      .catch('error');
  };
    // return({
    //     type: "clickedMovie",
    //     payLoad: index
    // })
}

export function clickedTvshow(index){
    return({
        type: "clickedTvshow",
        payLoad: index
    })
}