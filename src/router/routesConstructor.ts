import IndexRoute from '../routerConfig/index.route';
import UserRoute from '../modules/user/routes/user.route';
import AuthRoute from '../modules/auth/routes/auth.route';

export default [new IndexRoute(), new UserRoute(), new AuthRoute()];
