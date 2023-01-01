import { Request, Response, NextFunction } from 'express';
import validateVersion from '../utils/apiVersionController';
import UserService from '../services/user.service';

class UserController {
	public userService = new UserService();

	public getUsers = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const users = await this.userService.findAllUser();
			res
				.status(200)
				.json({
					data: users,
					message: 'user list',
					error: false,
					version: validateVersion(req.baseUrl),
				});
		} catch (error) {
			next(error);
		}
	};
}

export default UserController;
