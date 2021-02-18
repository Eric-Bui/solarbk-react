import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import routes from './pages/routes';
import { ToastContainer } from 'react-toastify';

function App() {
    const location = useLocation();

    return (
        <div className="app">
            <ToastContainer limit={5}/>
            {location.pathname !== '/' && <Header />}
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
