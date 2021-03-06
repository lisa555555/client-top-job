import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Upload from '~/pages/Upload';

import { HeaderOnly } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
