import React, { useState } from 'react'
import cl from '../../Style/User.module.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Features/User/UserSlice';

const UserLoginForm = ({ closeForm, toggleCurrentFormType }) => {
	const dispatch = useDispatch();

	const [values, setValues] = useState({
		email: '',
		password: ''
	});
	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value })
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const isEmpty = Object.values(values).some((val) => !val);
		if (isEmpty) return;
		dispatch(loginUser(values));
		closeForm();
	};

	return (
		<div className={cl.wrapper}>
			<div className={cl.close} onClick={closeForm}>
				<svg className='icon'>
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
				</svg>
			</div>
			<div className={cl.title}>Sign In</div>
			<form className={cl.form} onSubmit={handleSubmit}>

				<div className={cl.group}>
					<input type="email" name='email' value={values.email} autoComplete='off' placeholder='Email' required
						onChange={handleChange} />
				</div>

				<div className={cl.group}>
					<input type="password" name='password' value={values.password} autoComplete='off' placeholder='Password' required
						onChange={handleChange} />
				</div>

				<div className={cl.link} onClick={() => toggleCurrentFormType('signup')}>Create an account</div>
				<button type='submit' className={cl.submit}>Login</button>
			</form>
		</div>
	)
}

export default UserLoginForm