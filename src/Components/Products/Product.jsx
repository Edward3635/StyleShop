import React, { useEffect, useState } from 'react'
import cl from '../../Style/Product.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../Utils/Routes';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Features/User/UserSlice';

const SIZES = [1, 2, 3, 4, 5, 6, 7];

const Product = (item) => {
	const { images, price, title, description } = item;
	const dispatch = useDispatch();
	const [currentImage, setCurrentImage] = useState();
	const [currentSize, setCurrentSize] = useState();
	useEffect(() => {
		if (!images.length) return;
		setCurrentImage(images[0]);
	}, [images]);

	const addToCart = () => {
		dispatch(addItemToCart(item))
	};

	return (
		<section className={cl.product}>
			<div className={cl.images}>
				<div className={cl.current} style={{ backgroundImage: `url(${currentImage})` }} />
				<div className={cl['images-list']}>
					{images.map((image, i) => (
						<div className={cl.image} key={i} style={{ backgroundImage: `url(${image})` }}
							onClick={() => { setCurrentImage(image) }} />
					))}
				</div>
			</div>
			<div className={cl.info}>
				<h1 className={cl.title}>{title}</h1>
				<div className={cl.price}>{price}$</div>
				<div className={cl.color}>
					<span>Color:</span>Green
				</div>
				<div className={cl.sizes}>
					<span>Sizes:</span>
					<div className={cl.list}>
						{SIZES.map(size => (<div key={size} className={`${cl.size} ${currentSize === size ? cl.active : ''}`}
							onClick={() => { setCurrentSize(size) }}>{size}</div>))}
					</div>
				</div>
				<p className={cl.description}>{description}</p>
				<div className={cl.actions}>
					<button className={cl.add} onClick={addToCart} disabled={!currentSize}>Add to card</button>
					<button className={cl.favourites}>Add to favourites</button>
				</div>
				<div className={cl.bottom}>
					<div className={cl.purchase}>19 people purchased</div>
					<Link to={ROUTES.HOME}>Return to store</Link>
				</div>
			</div>
		</section>
	)
}

export default Product