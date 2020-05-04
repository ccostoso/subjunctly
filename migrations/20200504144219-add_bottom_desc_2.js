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
        queryInterface.addColumn('Expressions', 'bottom_desc_2', {
          type: Sequelize.DataTypes.TEXT,
          allowNull: true,
        }, { transaction: t })
        // queryInterface.changeColumn( 
        //   'Expressions', 'createdAt', {
        //     default: new Date()
        //   }
        // ),
        // queryInterface.changeColumn( 
        //   'Expressions', 'updatedAt', {
        //     default: new Date()
        //   }
        // )
      ])
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
    return Promise.all([
      queryInterface.removeColumn('Expressions', 'bottom_desc_2', { transaction: t })
      // queryInterface.changeColumn('Expressions', 'createdAt', { default: null }),
      // queryInterface.changeColumn('Expressions', 'updatedAt', { default: null })
    ]);
  });
  }
};
