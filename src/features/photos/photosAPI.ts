import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Photo } from './interfaces';

const API_ACCESS_KEY = 'y_idYWeP7RWvGyXkFeimMszvS8FTKmDkUXBRD_6AumE';

export const photosAPSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.unsplash.com',
		prepareHeaders(headers) {
			headers.set('key', API_ACCESS_KEY);
			return headers;
		},
	}),
	endpoints(builder) {
		return {
			fetchPhotos: builder.query<Photo[], string | void>({
				query(apiKey = API_ACCESS_KEY) {
					return `/photos?client_id=${apiKey}`;
				},
			}),
		};
	},
});

export const { useFetchPhotosQuery } = photosAPSlice;
