import axios from 'axios';
import { BASE_URL } from '../constants';

export const instanse = axios.create({
  baseURL: BASE_URL,
});
