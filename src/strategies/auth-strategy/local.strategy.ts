// import passportLocal from 'passport-local';
// import bcrypt from 'bcrypt';
// import passport from 'passport';

// const LocalStrategy = passportLocal.Strategy;

function localStart() {
	// passport.use(
	// 	'login-strategy',
	// 	new LocalStrategy(
	// 		{ usernameField: 'email' },
	// 		async (email, password, done) => {
	// 			let checkEmail: string = email.toLowerCase()
	// 			const user = await Users.findOne(
	// 				{
	// 					where: { email: checkEmail },
	// 					include: [
	// 						{
	// 							model: Roles,
	// 							as: 'roles',
	// 							required: true,
	// 						}
	// 					]
	// 				}
	// 			);
	// 			if (!user) {
	// 				return done(new HttpException(409, 'Email address not found'));
	// 			}
	// 			const actualUser = await Users.findOne(
	// 				{
	// 					where: { email: checkEmail },
	// 					attributes: attributes,
	// 					include: [
	// 						{
	// 							model: Roles,
	// 							as: 'roles',
	// 							required: true,
	// 						}
	// 					]
	// 				}
	// 			);

	// 			await bcrypt.compare(password, user.password, (err, isMatch) => {
	// 				if (err) {
	// 					done(err);
	// 				}

	// 				if (isMatch) {
	// 					return done(null, actualUser);
	// 				} else {
	// 					return done(
	// 						new HttpException(401, 'Password is incorrect')
	// 					);
	// 				}
	// 			});
	// 		}
	// 	)
	// );
}

export default localStart;
