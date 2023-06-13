import React, { useState } from 'react'
import cl from '../../Style/User.module.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Features/User/UserSlice';

const UserSignUpForm = ({ closeForm, toggleCurrentFormType }) => {
	const dispatch = useDispatch();

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		avatar: ''
	});
	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value })
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const isEmpty = Object.values(values).some((val) => !val);
		if (isEmpty) return;
		dispatch(createUser(values));
		closeForm();
	};

	return (
		<div className={cl.wrapper}>
			<div className={cl.close} onClick={closeForm}>
				<svg className='icon'>
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
				</svg>
			</div>
			<div className={cl.title}>Sign Up</div>
			<form className={cl.form} onSubmit={handleSubmit}>
				<div className={cl.group}>
					<input type="email" name='email' value={values.email} autoComplete='off' placeholder='Email' required
						onChange={handleChange} />
				</div>
				<div className={cl.group}>
					<input type="name" name='name' value={values.name} autoComplete='off' placeholder='Name' required
						onChange={handleChange} />
				</div>
				<div className={cl.group}>
					<input type="password" name='password' value={values.password} autoComplete='off' placeholder='Password' required
						onChange={handleChange} />
				</div>
				<div className={cl.group}>
					<input type="avatar" name='avatar' value={values.avatar} autoComplete='off' placeholder='Avatar' required
						onChange={handleChange} />
				</div>

				<div className={cl.link} onClick={() => toggleCurrentFormType('login')}>I already have an account</div>
				<button type='submit' className={cl.submit}>Create an account</button>
			</form>
		</div>
	)
}

export default UserSignUpForm