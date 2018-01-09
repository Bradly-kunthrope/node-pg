'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('User', [{
         first_name: 'John',
         last_name : 'Doe',
         bio : 'I am a new user to this application',
         createdAt : new Date(),
         updatedAt : new Date(),
         email : 'johnDoe@test.com'
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      bio: 'I am a new user to this application',
      createdAt: new Date(),
      updatedAt: new Date(),
      email: 'johnDoe@test.com'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, [{
      firstName : 'John'
    }]);
  }
};
