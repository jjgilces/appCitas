'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     for (let i = 0; i <10; i++) {  
      await queryInterface.bulkInsert('Person', [{  
          //Personid: i,
          firstName: 'Persona ',
          lastName: i,  
          age: 18,  
          email: 'persona'+i+'@gmail.com',
          password:'password'
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Person', null, {});  
  }
};
