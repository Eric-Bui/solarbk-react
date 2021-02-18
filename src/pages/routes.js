import { lazy } from 'react';

const ListProject = lazy(() => import('./ListProject/ListProject'));
const Detail = lazy(() => import('./Detail/Detail'));
const Info = lazy(() => import('./Info/Info'));
const Login = lazy(() => import('./Login/Login'));

export default [
    {
        path: '/',
        exact: true,
        component: Login,
        name: 'LoginComponent',
    },
    {
        path: '/list-project',
        exact: true,
        component: ListProject,
        name: 'ListProjectComponent',
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
