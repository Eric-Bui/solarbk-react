import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../Auth/userSlice';
import LoginForm from '../LoginForm/LoginForm';

Login.propTypes = {
    closeRegister: PropTypes.func,
};

function Login(props) {
    const { closeRegister } = props;
    const dispatch = useDispatch();
    const notify = (type, message) => toast[type](`${message}`);

    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('new User', user);
            if (closeRegister) {
                closeRegister();
            }
        } catch (error) {
            console.log('Error', error);
            notify('error', error.message || 'Something went wrong');
        }
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
