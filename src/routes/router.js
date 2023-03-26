import config from '../config/config';
// pages
import Home from './../pages/Home/Home';
import Movie from '../pages/Movie/Movie';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.movie, component: Movie },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
