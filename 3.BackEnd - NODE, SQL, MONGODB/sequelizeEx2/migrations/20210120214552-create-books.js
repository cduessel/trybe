'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BooksTable = await queryInterface.createTable('Books', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      }      ,
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      }
    });
    return BooksTable;
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Books')
};
