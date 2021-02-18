import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormControl/InputField/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './LoginForm.scss'
import loadingIcon from 'assets/images/loading.svg'
import { Form } from 'react-bootstrap';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const schema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter your email')
            .email('Please enter a valid email address'),
        password: yup.string().required('Please enter your password'),
    });
    const form = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
        // form.reset();
    };

    const { isSubmitting } = form.formState;
    return (
        <div className="form">
            <div className="form__title">
                <h5>Đăng nhập</h5>
            </div>
             <Form className="form-input" onSubmit={form.handleSubmit(onSubmit)}>
                <InputField name="username" type="email" label="Tên đăng nhập" form={form} />
                <InputField name="password" type="password" label="Mật khẩu" form={form} />

                <button className="btn-solar" disabled={isSubmitting} type="submit">
                    {isSubmitting ? '' : 'Đăng nhập'}
                    {isSubmitting && <img src={loadingIcon}/>}
                </button>
            </Form>
        </div>
    );
}

export default LoginForm;
