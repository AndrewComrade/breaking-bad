import { API_URL } from '@constants/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ICharacter } from '@/types/ICharacter';
import { IEpisode } from '@/types/IEpisode';
import { IPaginationParams } from '@/types/services';

export const breakingBadAPI = createApi({
  reducerPath: 'breakingBadAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getAllCharacters: build.query<ICharacter[], IPaginationParams>({
      query: (params) => ({
        url: '/characters',
        params,
      }),
    }),
    getEpisodesBySeries: build.query<IEpisode[], string>({
      query: (series) => ({
        url: '/episodes',
        params: {
          series,
        },
      }),
    }),
    getSingleCharacter: build.query<ICharacter, number>({
      query: (id) => ({ url: `/characters/${id}` }),
    }),
    getSingleEpisode: build.query<IEpisode, number>({
      query: (id) => ({ url: `/episodes/${id}` }),
    }),
  }),
});
