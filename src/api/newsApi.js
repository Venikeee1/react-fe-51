import axios from 'axios';
import qs from 'query-string';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '062ed387a7d842aa8958b938b9ec57dd';

export const fetchNews = (params) => {
  const searchParams = qs.stringify(params, { skipNull: true });

  return axios.get(`${BASE_URL}/everything?apiKey=${API_KEY}&${searchParams}`);
};
