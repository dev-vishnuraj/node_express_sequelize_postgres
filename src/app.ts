import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc';
import swaggerUI, { SwaggerOptions } from 'swagger-ui-express';
import passport from 'passport';
import sequelize from '../src/config/db';
import { __PROD__ } from './constants';
import Routes from './interfaces/routes.interface';
import errorMiddleware from './middlewares/error.middleware';
import * as strategies from './strategies/auth-strategy';
const fileUpload = require('express-fileupload');
const cron = require('node-cron');
const compression = require('compression');

const models = require('../models').sequelize;

class App {
	public app: express.Application;
	public port: string | number;
	public env: boolean;
	// public paymentRun = new PaymentScheduler(); // Scheduler initialization

	constructor(Routes: Routes[]) {
		this.app = express();
		this.port = process.env.PORT || 3000;
		this.env = __PROD__;

		this.connectToDatabase();
		this.initializeMiddlewares();
		this.initializeSwagger();
		this.initializeRoutes(Routes);
		this.initializeErrorHandling();
		this.Scheduler();
	}

	public Scheduler() {
		console.log('************** scheduler started successfully **************');
		cron.schedule('0 0 * * *', async () => {
			// function to run on the given interval
		});
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`Server running on PORT: ${this.port}`);
		});
	}

	public getServer() {
		return this.app;
	}

	private connectToDatabase() {
		sequelize.authenticate().then(async () => {
			console.log('*********** Database Connected **************');
			try {
				await models.sync({ [process.argv[2]]: true });
				console.log(
					'*********** Table Synchronize successfully **************'
				);
			} catch (err) {
				console.log(err);
			}
		});
	}

	private initializeMiddlewares() {
		this.app.set('etag', false);
		this.app.disable('view cache');
		this.app.use(passport.initialize());
		this.app.use(passport.session());
		this.app.use(express.json());
		this.app.use(compression()),
			this.app.use(
				express.urlencoded({
					extended: true,
				})
			);
		Object.values(strategies.default.local).forEach((strategy: any) => {
			strategy(passport);
		});
		this.app.use(fileUpload());
		if (this.env) {
			this.app.use(hpp());
			this.app.use(helmet());
			this.app.use(morgan('combined'));
			this.app.use(
				cors({
					origin: process.env.DOMAIN,
					credentials: true,
				})
			);
		} else {
			this.app.use(morgan('dev'));
			this.app.use(
				cors({
					origin: true,
					credentials: true,
				})
			);
		}
	}

	private initializeRoutes(routes: Routes[]) {
		routes.forEach((route) => this.app.use('/v1', route.router));
	}

	private initializeErrorHandling() {
		this.app.use(errorMiddleware);
	}

	private initializeSwagger() {
		const swaggerDefinition: SwaggerDefinition = {
			basePath: '/',
			servers: [{ url: process.env.API_URL }],
			openapi: '3.0.1',
			info: {
				title: 'Vibeonix API Docs',
				version: '1.0.0',
				description: 'API documentation for vibeonix',
			},
			components: {
				securitySchemes: {
					ApiKeyAuth: {
						type: `apiKey`,
						name: `api_key`,
						in: `header`,
					},
				},
			},
		};
		const options: SwaggerOptions = { swaggerDefinition, apis: ['**/*.ts'] };

		const specs = swaggerJSDoc(options);
		this.app.get('/swagger.json', function (_req, res) {
			res.setHeader('Content-Type', 'application/json');
			res.send(specs);
		});
		this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
	}
}

export default App;
