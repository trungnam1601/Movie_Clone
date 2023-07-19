import config from '../config/config';
// pages
import Home from './../pages/Home/Home';
import Favorite from '../pages/Favorite/Favorite';
import Catalog from './../pages/Catalog/Catalog';
import Detail from '../pages/Detail/Detail';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.catalog, component: Catalog },
    { path: config.routes.search, component: Catalog },
    { path: config.routes.detail, component: Detail },
];

const privateRoutes = [{ path: config.routes.favorite, component: Favorite }];

export { publicRoutes, privateRoutes };
