import Login from 'features/components/Login/Login';
import React, { useState } from 'react';
import { Button, Modal, Nav, Navbar, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Register from 'features/components/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { logout } from 'features/Auth/userSlice';

library.add(fab, faCheckSquare, faUserCircle);

const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};

function Header(props) {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!loggedInUser.id;

    const [show, setShow] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLogoutClick = () => {
        const action = logout();
        dispatch(action);
    };
    return (
        <div>
            <ToastContainer limit={5} />
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="mr-auto">
                    Navbar
                </Navbar.Brand>
                <Nav>
                    <NavLink className="nav-link" to="/home">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/detail">
                        Detail
                    </NavLink>
                    <NavLink className="nav-link" to="/info">
                        Info
                    </NavLink>
                    {!isLoggedIn && <Nav.Link onClick={handleShow}>Login</Nav.Link>}
                    {isLoggedIn && (
                        <Dropdown alignRight>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FontAwesomeIcon icon="user-circle" size="1x" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu menuAlign="left">
                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogoutClick}>Log out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    )}
                </Nav>
            </Navbar>

            {/* Modal show form register */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{mode === MODE.REGISTER ? 'Đăng ký' : 'Đăng nhập'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeRegister={handleClose} />
                            <Nav.Link onClick={() => setMode(MODE.LOGIN)}>
                                Already have an account. Click here
                            </Nav.Link>
                        </>
                    )}

                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeRegister={handleClose} />
                            <Nav.Link onClick={() => setMode(MODE.REGISTER)}>
                                Don't have an account. Click here
                            </Nav.Link>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Header;
