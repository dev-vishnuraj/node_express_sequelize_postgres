'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [{
      id: 1,
      role: 'super_admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
  },
};
