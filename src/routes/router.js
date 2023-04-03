import config from '../config/config';
// pages
import Home from './../pages/Home/Home';
import Movie from '../pages/Movie/Movie';
import TvSeries from '../pages/TvSeries/TvSeries';
import Favorite from '../pages/Favorite/Favorite';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.movie, component: Movie },
    { path: config.routes.tv, component: TvSeries },
    { path: config.routes.favorite, component: Favorite },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
