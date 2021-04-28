'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Leonardo",
          email: "leo@test.com",
        },
        {
          fullName: "JEduardo",
          email: "edu@test.com",
        },
      ],
      {}
    ),

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Users", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
