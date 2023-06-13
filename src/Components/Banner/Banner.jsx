import React from 'react'

import cl from '../../Style/Home.module.css';
import bannerImg from "../../Img/banner.png"

const Banner = () => {
	return (
		<section className={cl.banner}>
			<div className={cl.left}>
				<p className={cl.content}>
					NEW YEAR
					<span>SALE</span>
				</p>
				<button className={cl.more}>See more</button>
			</div>

			<div className={cl.right} style={{ backgroundImage: `url(${bannerImg})` }}>
				<p className={cl.discount}>
					save up to <span>50%</span> off
				</p>
			</div>
		</section>
	)
}

export default Banner