import { Router } from 'express';
import AuthController from '../controller/auth.controller';
import Route from '../../../interfaces/routes.interface';
import authMiddleware from '../../../middlewares/auth.middleware';

class AuthRoute implements Route {
	public path = '/auth';
	public router = Router();
	public authController = new AuthController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {

		this.router.post(
			`${this.path}/login`,
			authMiddleware,
			this.authController.login
		);

	}
}

export default AuthRoute;
