'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Ratings', [{
      score: 5,
      UserId: 2,
      RecipeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      score: 4,
      UserId: 3,
      RecipeId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      score: 3,
      UserId: 2,
      RecipeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      score: 4,
      UserId: 3,
      RecipeId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      score: 3,
      UserId: 2,
      RecipeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      score: 2,
      UserId: 3,
      RecipeId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  )},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
