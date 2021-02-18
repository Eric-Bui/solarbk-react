import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import background from 'assets/images/login-background.png';
import loginVN from 'assets/images/login-vi.png';
import Login from 'features/components/Login/Login';
import { Container, Row, Col } from 'react-bootstrap';

LoginComponent.propTypes = {};

function LoginComponent(props) {
    return (
        <Container fluid className="login">
            <div className="login__background">
                <img src={background} alt="" />
            </div>
            <div className="login__custom flex-center">
                <Row className="w-100">
                    <Col lg="5">
                        <div className="login__title">
                            <img src={loginVN} alt="" />
                        </div>
                        <div className="login__form">
                            <Login />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default LoginComponent;
