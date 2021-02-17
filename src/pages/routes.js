import { lazy } from 'react';

const HomePage = lazy(() => import('./Home/Home'));
const Detail = lazy(() => import('./Detail/Detail'));
const Info = lazy(() => import('./Info/Info'));
const Login = lazy(() => import('./Login/Login'));

export default [
    {
        path: '/',
        exact: true,
        component: Login,
        name: 'Home',
    },
    {
        path: '/home',
        exact: true,
        component: HomePage,
        name: 'Home',
    },
    {
        path: '/detail',
        exact: true,
        component: Detail,
        name: 'Detail',
    },
    {
        path: '/info',
        exact: true,
        component: Info,
        name: 'Info',
    },
];
