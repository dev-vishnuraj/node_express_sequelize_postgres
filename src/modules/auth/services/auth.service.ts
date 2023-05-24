import { LoginDto } from '../dto/auth.dto';

const Users = require('../../../../models').Users;

class AuthService {
	public async login(request_body: LoginDto) {
		const { email, password } = request_body;
		return await Users.findOne({ where: { email, password } });
	}
}

export default AuthService;
