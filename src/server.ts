require('dotenv-safe').config();
import App from './app';
import Routes from './router/routesConstructor';
import validateEnv from '../src/utils/validateEnv';

validateEnv();
const app = new App(Routes);
app.listen();
