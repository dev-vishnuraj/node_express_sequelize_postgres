'use strict';
// @ts-nocheck
import { Model } from 'sequelize';
module.exports = (sequelize: any, DataTypes: any) => {
	class users extends Model {
		// @ts-ignore
		static associate(models) {
		}
	}

	users.init(
		{
			id: {
				type: DataTypes.BIGINT,
				primaryKey: true,
				autoIncrement: true,
			},
			first_name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			last_name: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			status: {
				type: DataTypes.STRING,
				defaultValue: 'active',
			},
		},
		{
			sequelize,
			modelName: 'users',
		}
	);
	return users;
};
