import { cleanEnv, port, str } from 'envalid';

function validateEnv() {
	cleanEnv(process.env, {
		NODE_ENV: str(),
		DOMAIN: str(),
		PORT: port(),
		DB_TYPE: str(),
		DB_HOST: str(),
		DB_PORT: port(),
		DB_USERNAME: str(),
		DB_PASSWORD: str(),
		DB_NAME: str(),
		JWT_ACCESS_SECRET: str(),
		JWT_REFRESH_SECRET: str(),
		JWT_EMAIL_SECRET: str(),
	});
}


export default validateEnv;
