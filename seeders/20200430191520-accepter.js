'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Expressions", [{
      name: "accepter",
      source_html: "accepter",
      type: "oui",
      top_desc: '<strong>Yes</strong>, "accepter" requires the subjunctive.',
      exen_1: "I accept that you are always late.",
      exfr_1: "J’accepte que tu sois toujours en retard.",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("Expressions", {source_html: "accepter"})
  }
};
