const Users = require('../../../../models').Users;

class UserService {
	public async findAllUser() {
		return await Users.findAll();
	}
}

export default UserService;
