'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('employees', 
      [
        {
        firstName: 'Rajesh',
        lastName: 'Mishra',
        contact:7879284,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Shikha',
        lastName: 'Sharma',
        contact:7264722,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Rahul',
        lastName: 'Gupta',
        contact:209898,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    );
    },

    async down (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});
    }
};
