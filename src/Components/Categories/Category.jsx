import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../Features/API/APISlice';

import cl from '../../Style/Category.module.css';
import Products from '../Products/Products';
import { useSelector } from 'react-redux';

const Category = () => {
	const { id } = useParams();
	const { list } = useSelector(({ categories }) => categories);


	const defaultValues = {
		title: '',
		price_min: 0,
		price_max: 0,
	};

	const defaultParams = {
		categoryId: id,
		limit: 5,
		offset: 0,
		...defaultValues
	};

	const [isEnd, setEnd] = useState(false);
	const [values, setValues] = useState(defaultValues);
	const [cat, setCat] = useState(null);
	const [params, setParams] = useState(defaultParams);
	const { data, isLoading, isSuccess } = useGetProductsQuery(params);
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (!id) return;

		setValues(defaultValues);
		setItems([]);
		setEnd(false);
		setParams({ ...defaultParams, categoryId: id });
	}, [id]);

	useEffect(() => {
		if (!list || !list.length) return;
		const category = list.find(item => item.id === id * 1);
		setCat(category);
	}, [id, list]);

	useEffect(() => {
		if (isLoading) return;
		if (!data.length) return setEnd(true)

		setItems((_items) => [..._items, ...data])
	}, [data, isLoading]);

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};
	const handleSubmut = (e) => {
		e.preventDefault();
		setItems([]);
		setEnd(false);
		setParams({ ...defaultParams, ...values })
	};

	const handleReset = () => {
		setValues(defaultValues);
		setParams(defaultParams);
		setEnd(false);
	}

	return (
		<section className={cl.wrapper}>
			<h2 className={cl.title}>{cat?.name}</h2>
			<form className={cl.filter} onSubmit={handleSubmut}>
				<div className={cl.filter}>
					<input type="text" name='title' placeholder='Product name' value={values.title}
						onChange={handleChange} />
				</div>

				<div className={cl.filter}>
					<input type="number" name='price_min' placeholder='0' value={values.price_min}
						onChange={handleChange} />
					<span>Price from</span>
				</div>


				<div className={cl.filter}>
					<input type="number" name='price_max' placeholder='0' value={values.price_max}
						onChange={handleChange} />
					<span>Price to</span>
				</div>
				<button type='submit' hidden />
			</form>

			{isLoading ? <div className="preloader">Loading...</div> :
				!isSuccess || !items.length ? (
					<div className={cl.back}>
						<span>No results</span>
						<button onClick={handleReset}>Reset</button>
					</div>
				) :
					<Products title='' products={items} style={{ padding: 0 }} amount={items.length} />
			}
			{!isEnd &&
				<div className={cl.more}>
					<button onClick={() => setParams({ ...params, offset: params.offset + params.limit })}>
						See more
					</button>
				</div>}
		</section>
	)
}

export default Category