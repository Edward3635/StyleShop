import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';
import { filterByPrice } from '../../Features/Products/ProductsSlice';

const Home = () => {
	const dispatch = useDispatch();
	const { products: { list, filtered }, categories } = useSelector((state) => state);
	useEffect(() => {
		if (!list.length) return;
		dispatch(filterByPrice(100))
	}, [dispatch, list.length]);
	return (
		<>
			<Poster></Poster>
			<Products products={list} amount={5} title='Trending'></Products>
			<Categories products={categories.list} amount={5} title='Worth to see'></Categories>
			<Banner />
			<Products products={filtered} amount={5} title='Less 100$'></Products>
		</>
	)
}

export default Home