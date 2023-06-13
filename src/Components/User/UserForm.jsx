import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserSignUpForm from './UserSignUpForm';
import cl from '../../Style/User.module.css';
import { toggleForm, toggleFormType } from '../../Features/User/UserSlice';
import UserLoginForm from './UserLoginForm';

const UserForm = () => {
	const { showForm, formType } = useSelector(({ user }) => user);
	const dispatch = useDispatch();
	const closeForm = () => dispatch(toggleForm(false));
	const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));
	return (
		showForm &&
		<>
			<div className={cl.overlay} onClick={closeForm} />
			{formType === 'signup' ?
				<UserSignUpForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType} /> :
				<UserLoginForm closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType} />}
		</>
	)
}

export default UserForm