import { API_URL } from '@constants/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const breakingBadAPI = createApi({
  reducerPath: 'breakingBadAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getAllCharacters: build.query({
      query: () => ({ url: '/characters' }),
    }),
    getAllEpisodes: build.query({
      query: () => ({ url: '/episodes' }),
    }),
    getCharacterById: build.query({
      query: (id) => ({ url: `/characters/${id}` }),
    }),
    getEpisodeById: build.query({
      query: (id) => ({ url: `/episodes/${id}` }),
    }),
  }),
});
