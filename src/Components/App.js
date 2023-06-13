import React, { useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import AppRoutes from './Routes/AppRoutes';
import { useDispatch } from 'react-redux';
import { getCategories } from '../Features/Categories/CategoriesSlice';
import { getProducts } from '../Features/Products/ProductsSlice';
import UserForm from './User/UserForm';


function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts())
	}, [dispatch]);
	return (
		<div className='app'>
			<Header />
			<UserForm />
			<div className='container'>
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	);
}

export default App;
