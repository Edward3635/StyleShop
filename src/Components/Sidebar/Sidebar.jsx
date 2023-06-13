import React from 'react'

import cl from '../../Style/Sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
	const { list } = useSelector(({ categories }) => categories);
	return (
		<section className={cl.sidebar}>
			<div className={cl.title}>CATEORIES</div>
			<nav>
				<ul className={cl.menu}>
					{list.map(({ id, name }) => (
						<li key={id}>
							<NavLink to={`/categories/${id}`}
								className={({ isActive }) => `${cl.link} ${isActive ? cl.active : ""}`}>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<div className={cl.footer}>
				<a href='/help' className={cl.link} target='_blank'>
					Help
				</a>
				<a href='/terms' className={cl.link} target='_blank' style={{ textDecoration: "underline" }}>
					Term & Conditions
				</a>
			</div>
		</section>
	)
}

export default Sidebar