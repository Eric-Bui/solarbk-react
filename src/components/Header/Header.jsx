import { logout } from 'features/Auth/userSlice';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import LogoNavbar from 'assets/images/logo.png';
import './Header.scss';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

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

    const [t, i18n] = useTranslation();
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div className="navbar-container">
            <Navbar>
                <Link to="/" className="navbar-brand">
                    <img src={LogoNavbar} alt="" />
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Nav.Link onClick={() => handleChangeLanguage('en')}>English</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link onClick={() => handleChangeLanguage('vi')}>Viet Nam</Nav.Link>
                    </li>
                    <li className="nav-item">
                        <Nav.Link onClick={() => handleChangeLanguage('chi')}>China</Nav.Link>
                    </li>
                </ul>
            </Navbar>
        </div>
    );
}

export default Header;
