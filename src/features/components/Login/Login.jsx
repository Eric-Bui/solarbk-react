import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../Auth/userSlice';
import LoginForm from '../LoginForm/LoginForm';

Login.propTypes = {
    // closeRegister: PropTypes.func,
};

function Login(props) {
    const { closeRegister } = props;
    const history = useHistory();
    const dispatch = useDispatch();
    const notify = (type, message) => toast[type](`${message}`);

    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log('new User', user);
            if (user.token) {
                history.push('/list-project');
            }
        } catch (err) {
            console.log('Error', err);
            notify('error', err.message || 'Something went wrong');
        }
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;
