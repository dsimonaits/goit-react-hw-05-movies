import axios from 'axios';

const API_KEY = '4c2c309e2c0263a8769257d39e3c269a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies(page = 1) {
  try {
    const response = await axios('trending/movie/day', {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios(`movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieReviews(movieId, page = '1') {
  try {
    const response = await axios(`movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const response = await axios(`movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieByQuery(query, page) {
  try {
    const response = await axios(`search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// http://api.themoviedb.org/3/search/movie?api_key=4c2c309e2c0263a8769257d39e3c269a&query=images

// http://api.themoviedb.org/3/search/movie/?api_key=4c2c309e2c0263a8769257d39e3c269a&query=images
