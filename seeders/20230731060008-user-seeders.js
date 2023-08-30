'use strict';

const bycrypt = require('bcrypt');

module.exports = {
   up : async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('users', [
      {
        name: "alif",
        profession :"programmer",
        role:"admin",
        email:"alifndaru8@gmail.com",
        password: await bycrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at : new Date()
      },
      {
        name: "ndaru",
        profession :"backend enggineer",
        role: "student",
        email: "ndaru8@gmail.com",
        password: await bycrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at : new Date()
      }

    ]);
    
  },

  down : async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});
  }

};
