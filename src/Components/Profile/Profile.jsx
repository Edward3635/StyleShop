import React, { useEffect, useState } from 'react'
import cl from '../../Style/Profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Features/User/UserSlice';

const Profile = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector(({ user }) => user)
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
		dispatch(updateUser(values));
	};


	useEffect(() => {
		if (!currentUser) return;
		setValues(currentUser);
	}, [currentUser]);

	return (
		<section className={cl.profile}>
			{!currentUser ? <span>You need to Sign In</span> :

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
						<input type="text" name='password' value={values.password} autoComplete='off' placeholder='Password' required
							onChange={handleChange} />
					</div>
					<div className={cl.group}>
						<input type="avatar" name='avatar' value={values.avatar} autoComplete='off' placeholder='Avatar' required
							onChange={handleChange} />
					</div>

					<button type='submit' className={cl.submit}>Update</button>
				</form>
			}
		</section>
	)
}

export default Profile