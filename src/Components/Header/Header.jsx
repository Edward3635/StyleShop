import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import cl from '../../Style/Header.module.css';
import { ROUTES } from '../../Utils/Routes';
import LOGO from '../../Img/logo.png';
import AVATAR from '../../Img/avatar.jpg';
import { toggleForm } from '../../Features/User/UserSlice';
import { useGetProductsQuery } from '../../Features/API/APISlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { currentUser, cart } = useSelector(({ user }) => user);
	const [searchValue, setSearchValue] = useState('');

	const handleClick = () => {
		if (!currentUser) dispatch(toggleForm(true));
		else navigate(ROUTES.PROFILE);
	};
	const [values, setValues] = useState({ name: 'Guest', avatar: AVATAR });

	const { data, isLoading } = useGetProductsQuery({ title: searchValue });

	const handleSearch = ({ target: { value } }) => {
		setSearchValue(value)
	};

	useEffect(() => {
		if (!currentUser) return;
		setValues(currentUser);
	}, [currentUser]);

	return (
		<div className={cl.header}>
			<div className={cl.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt="logo" />
				</Link>
			</div>

			<div className={cl.info}>
				<div className={cl.user} onClick={handleClick}>
					<div className={cl.avatar} style={{ backgroundImage: `url(${values.avatar})` }} />
					<div className={cl.username}>{values.name}</div>
				</div>
				<form className={cl.form}>
					<div className={cl.icon}>
						<svg className="icon">
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
						</svg>
					</div>
					<div className={cl.input}>
						<input type="search" name='search' placeholder='Search for anything...'
							autoComplete='off' onChange={handleSearch} value={searchValue} />
					</div>

					{searchValue && <div className={cl.box}>
						{isLoading ? 'Loading' : !data.length ? 'No resault' : (
							data.map(({ title, images, id }) => {
								return (
									<Link to={`/products/${id}`} className={cl.item}
										onClick={() => setSearchValue('')} key={id}>
										<div className={cl.image} style={{ backgroundImage: `url(${images[0]})` }} />
										<div className={cl.title}>{title}</div>
									</Link>
								)
							})
						)}
					</div>}
				</form>

				<div className={cl.account}>
					<Link to={ROUTES.HOME} className={cl.favourites}>
						<svg className={cl["icon-fav"]}>
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
						</svg>
					</Link>

					<Link to={ROUTES.CART} className={cl.cart}>
						<svg className={cl["icon-cart"]}>
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
						</svg>
						{!!cart.length && <span className={cl.count}>{cart.length}</span>}
					</Link>

				</div>
			</div>
		</div>
	)
}

export default Header