import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormControl/InputField/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const schema = yup.object().shape({
        identifier: yup
            .string()
            .required('Please enter your email')
            .email('Please enter a valid email address'),
        password: yup.string().required('Please enter your password'),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
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
        <>
            <Form onSubmit={form.handleSubmit(onSubmit)}>
                <InputField name="identifier" type="email" label="Email" form={form} />
                <InputField name="password" type="password" label="Password" form={form} />

                <Button disabled={isSubmitting} variant="primary" type="submit">
                    {isSubmitting ? '' : 'Sign in'}
                    {isSubmitting && <Spinner animation="border" variant="primary" />}
                </Button>
            </Form>
        </>
    );
}

export default LoginForm;
