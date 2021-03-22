import React from 'react';

const Home = React.lazy(() => import('./pages/home/Home'));
const News = React.lazy(() => import('./pages/news/News'));

const routes = [
    {path: '/', exact: true, name: 'Home', component: Home},
    {path: '/home', name: 'Home', component: Home},
    {path: '/news', exact: true, name: 'News list', component: News},
    {path: '/news/:id', exact: true, name: 'New item', component: News}
];

export default routes;
