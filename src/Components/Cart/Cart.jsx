import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cl from '../../Style/Cart.module.css';
import { sumBy } from '../../Utils/Common';
import { addItemToCart, removeItemFromCart } from '../../Features/User/UserSlice';

const Cart = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector(({ user }) => user);
	const changeQuantity = (item, quantity) => {
		dispatch(addItemToCart({ ...item, quantity }));
	};
	const removeItem = (id) => {
		dispatch(removeItemFromCart(id));
	};
	return (
		<section className={cl.cart}>
			<h2 className={cl.title}>Your card</h2>
			{!cart.length ? <div className={cl.empty}>Empty</div> :
				<>
					<div className={cl.list}>
						{cart.map((item) => {
							const { title, category, images, price, id, quantity } = item;
							return (
								<div className={cl.item} key={id}>
									<div className={cl.image} style={{ background: `url(${images[0]})` }} />

									<div className={cl.info}>
										<h3 className={cl.name}>{title}</h3>
										<div className={cl.category}>{category.name}</div>
									</div>

									<div className={cl.price}>{price}$</div>
									<div className={cl.quantity}>
										<div className={cl.minus}
											onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
											<svg className='icon'>
												<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`} />
											</svg>
										</div>

										<span>{quantity}</span>
										<div className={cl.plus}
											onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}>
											<svg className='icon'>
												<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`} />
											</svg>
										</div>
									</div>

									<div className={cl.total}>{price * quantity}$</div>

									<div className={cl.close} onClick={() => removeItem(item.id)}>
										<svg className='icon'>
											<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
										</svg>
									</div>
								</div>

							)
						})}
					</div>

					<div className={cl.actions}>
						<div className={cl.total}>
							TOTAL PRICE: {''}
							<span>{sumBy(cart.map(({ quantity, price }) => quantity * price))}$</span>
						</div>
						<button className={cl.proceed}>Proceed to checkout</button>
					</div>
				</>
			}
		</section>
	)
}

export default Cart