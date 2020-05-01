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
      return queryInterface.addColumn('Expressions', 'source_html', {
        type: Sequelize.DataTypes.TEXT,
        required: true,
        allowNull: false,
      }, { transaction: t })
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.removeColumn('Expressions', 'top_desc', { transaction: t })
    })
  }
};
