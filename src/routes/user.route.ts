import { Router } from 'express';
import UserController from '../controllers/user.controller';
import Route from '../interfaces/routes.interface';
import authMiddleware from '../middlewares/auth.middleware';

class UserRoute implements Route {
	public path = '/users';
	public router = Router();
	public userController = new UserController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {

		this.router.get(
			`${this.path}`,
			authMiddleware,
			this.userController.getUsers
		);

	}
}

export default UserRoute;
