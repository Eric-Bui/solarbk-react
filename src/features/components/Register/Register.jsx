import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from '../../Auth/userSlice';
import RegisterForm from '../RegisterForm/RegisterForm';

Register.propTypes = {
    closeRegister: PropTypes.func,
};

function Register(props) {
    const { closeRegister } = props;
    const dispatch = useDispatch();
    const notify = (type, message) => toast[type](`${message}`);

    const handleSubmit = async (values) => {
        values.username = values.email;

        try {
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('new User', user);
            notify('success', 'Register successfully!!! 🥳');
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
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;
