import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormControl/InputField/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Spinner from 'react-bootstrap/Spinner';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object().shape({
        fullname: yup
            .string()
            .required('Please enter your full name.')
            .test('Should has at least two words', 'Please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup
            .string()
            .required('Please enter your email')
            .email('Please enter a valid email address'),
        password: yup.string().required('Please enter your password'),
        retypePassword: yup
            .string()
            .required('Please enter your confirm password')
            .oneOf([yup.ref('password')], 'Confirm password is not match'),
    });
    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            retypePassword: '',
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
                <InputField name="fullname" type="text" label="Full name" form={form} />
                <InputField name="email" type="email" label="Email" form={form} />
                <InputField name="password" type="password" label="Password" form={form} />
                <InputField
                    name="retypePassword"
                    type="password"
                    label="Retype password"
                    form={form}
                />
                <Button disabled={isSubmitting} variant="primary" type="submit">
                    {isSubmitting ? '' : 'Submit'}
                    {isSubmitting && <Spinner animation="border" variant="primary" />}
                </Button>
            </Form>
        </>
    );
}

export default RegisterForm;
