'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Expressions', 'top_desc', {
          type: Sequelize.DataTypes.TEXT,
          allowNull: false,
        }, { transaction: t }),
        queryInterface.addColumn('Expressions', 'first_desc', {
          type: Sequelize.DataTypes.TEXT,
        }, { transaction: t }),
        queryInterface.addColumn('Expressions', 'second_desc', {
          type: Sequelize.DataTypes.TEXT,
        }, { transaction: t }),
        queryInterface.addColumn('Expressions', 'third_desc', {
          type: Sequelize.DataTypes.TEXT,
        }, { transaction: t }),
        queryInterface.addColumn('Expressions', 'bottom_desc', {
          type: Sequelize.DataTypes.TEXT,
        }, { transaction: t })
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Expressions', 'top_desc', { transaction: t }),
        queryInterface.removeColumn('Expressions', 'first_desc', { transaction: t }),
        queryInterface.removeColumn('Expressions', 'second_desc', { transaction: t }),
        queryInterface.removeColumn('Expressions', 'third_desc', { transaction: t }),
        queryInterface.removeColumn('Expressions', 'bottom_desc', { transaction: t }),
      ]);
    });
  }
};
