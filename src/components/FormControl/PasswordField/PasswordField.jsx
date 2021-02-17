import PropTypes from 'prop-types';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { name, label, type, form } = props;
    const { errors, formState } = form;
    const hasError = errors[name] && formState.touched[name];
    return (
        <Form.Group controlId={name}>
            <Form.Label>{label}</Form.Label>
            <Controller
                type={type}
                label={label}
                name={name}
                as={<Form.Control />}
                control={form.control}
            />
        </Form.Group>
    );
}

export default PasswordField;
