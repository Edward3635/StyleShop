import React from 'react'
import { Link } from 'react-router-dom';

import cl from '../../Style/Footer.module.css';
import { ROUTES } from '../../Utils/Routes';

import LOGO from '../../Img/logo.png';

const Footer = () => {
	return (
		<section className={cl.footer}>
			<div className={cl.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt="logo" />
				</Link>
			</div>
			<div className={cl.rights}>
				Developed by
				<a href='#' target='_blank' rel='noreferrer' > Chernitskyi</a>
			</div>
			<div className={cl.socials}>
				<a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
					</svg>
				</a>

				<a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
					</svg>
				</a>

				<a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
					<svg className='icon'>
						<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
					</svg>
				</a>
			</div>
		</section>
	)
}

export default Footer