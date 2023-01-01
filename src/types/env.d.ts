declare namespace NodeJS {
	export interface ProcessEnv {
		DOMAIN: string;
		PORT: string;
		NODE_ENV: string;
		DB_TYPE: string;
		DB_HOST: string;
		DB_PORT: string;
		DB_USERNAME: string;
		DB_PASSWORD: string;
		DB_NAME: string;
		JWT_ACCESS_SECRET: string;
		JWT_REFRESH_SECRET: string;
		JWT_EMAIL_SECRET: string;
	}
}

