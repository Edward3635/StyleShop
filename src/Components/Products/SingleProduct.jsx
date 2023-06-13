import React, { useEffect } from 'react'
import { useGetProductQuery } from '../../Features/API/APISlice'
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from '../../Utils/Routes';
import Product from './Product';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from '../../Features/Products/ProductsSlice';

const SingleProduct = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
	const { list, related } = useSelector(({ products }) => products)

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate(ROUTES.HOME)
		}
	}, [isLoading, isFetching, isSuccess]);

	useEffect(() => {
		if (!data || !list.length) return;
		dispatch(getRelatedProducts(data.category.id));

	}, [data, dispatch, list.length]);

	return (
		!data ? <section className="preloader">Loading...</section> :
			<>
				<Product {...data} />
				<Products products={related} amount={5} title='Related products' />
			</>
	)
}

export default SingleProduct