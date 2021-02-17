import { lazy } from 'react';

const HomePage = lazy(() => import('./Home/Home'));
const Detail = lazy(() => import('./Detail/Detail'));
const Info = lazy(() => import('./Info/Info'));

export default [
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
