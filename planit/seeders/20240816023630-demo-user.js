'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'sampleuser',
      email: 'sampleuser@example.com',
      password: 'password123',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
