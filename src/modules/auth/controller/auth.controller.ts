import { Request, Response, NextFunction } from 'express';
import validateVersion from '../../../utils/apiVersionController';
import AuthService from '../services/auth.service';
import { LoginDto } from '../dto/auth.dto';

class AuthController {
	public authService = new AuthService();

	public login = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const request_body: LoginDto = req.body;
			const users = await this.authService.login(request_body);
			res.status(200).json({
				data: users,
				message: 'success',
				error: false,
				version: validateVersion(req.baseUrl),
			});
		} catch (error) {
			next(error);
		}
	};
}

export default AuthController;
