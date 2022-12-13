import { DynamicFeed, Movie } from '@mui/icons-material';
import axios from 'axios';

const API_KEY = '4c2c309e2c0263a8769257d39e3c269a';

async function fetchMovies(url) {
  try {
    const response = await axios(url);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function fetchTrandingMovies() {
  const trandingUrl = 'https://api.themoviedb.org/3/trending';

  return fetchMovies(`${trandingUrl}/movie/day?api_key=${API_KEY}`);
}
