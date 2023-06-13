import { configureStore } from '@reduxjs/toolkit';
import CategoriesSlice from './Categories/CategoriesSlice';
import ProductsSlice from './Products/ProductsSlice';
import { APISlice } from './API/APISlice';
import UserSlice from './User/UserSlice';

export const store = configureStore({
	reducer: {
		categories: CategoriesSlice,
		products: ProductsSlice,
		[APISlice.reducerPath]: APISlice.reducer,
		user: UserSlice,
	},
	middleware: (getMiddleware) => getMiddleware().concat(APISlice.middleware),
	devTools: true
})