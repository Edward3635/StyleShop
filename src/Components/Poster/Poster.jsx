import React from 'react'

import cl from '../../Style/Home.module.css';
import bg from '../../Img/computer.png'

const Poster = () => (
	<section className={cl.home}>
		<div className={cl.title}>BIG SALE 20%</div>
		<div className={cl.product}>
			<div className={cl.text}>
				<div className={cl.subtitle}>The bestseller of 2023</div>
				<h1 className={cl.head}>LENNON r2d2 with NVIDIA 4090 TI</h1>
				<button className={cl.button}>Shop Now</button>
			</div>
			<div className={cl.image}>
				<img src={bg} alt="bg" />
			</div>
		</div>
	</section>
)


export default Poster