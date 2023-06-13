import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../Utils/Constants";
import { buildUrl } from "../../Utils/Common";
export const APISlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	tagTypes: ["Product"],
	endpoints: (builder) => ({
		getProduct: builder.query({
			query: ({ id }) => `/products/${id}`,
			providesTags: ['Product'],
		}),
		getProducts: builder.query({
			query: (params) => buildUrl('/products', params),
			providesTags: ['Products'],
		}),

	}),
});
export const { useGetProductQuery, useGetProductsQuery } = APISlice;