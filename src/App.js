import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import routes from './pages/routes';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';

function App() {
    const [t, i18n] = useTranslation();
    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };
    return (
        <div className="app">
            <Header />
            <p>{t('thanks.abc')}</p>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => handleChangeLanguage('en')}>English</Nav.Link>
                <Nav.Link onClick={() => handleChangeLanguage('vi')}>Viet Nam</Nav.Link>
                <Nav.Link onClick={() => handleChangeLanguage('chi')}>China</Nav.Link>
            </Nav>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            component={route.component}
                            path={route.path}
                            exact={route.exact}
                        />
                    ))}
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
