'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Recipes', [{
      title: 'CheeseBurger',
      recipe: `1.
      Set oven rack to lower middle position and preheat oven to 200°F. Divide meat into four even 1/2-pound portions. Form into four 4-inch-wide patties, leaving slight depression in center of each. Season liberally with kosher salt and black pepper and place patties on wire rack set in rimmed baking sheet. Place in oven and cook until center of each patty registers 120°F on an instant read thermometer for medium rare (110°F for rare, 135 °F and up for medium well to well), 15 to 30 minutes (time may vary depending on oven temperature cycling). Tent burgers loosely with foil.
      
      2.
      Add vegetable oil to 12-inch heavy-bottomed stainless steel or cast iron skillet and heat over high heat until smoking. Add burger patties and cook until browned crust develops on first side, 45 seconds to 1 minute 15 seconds. Flip patties. Add cheese if desired. Cook until second side develops dark brown crust, additional 45 seconds to 1 minute 15 seconds. Transfer to buns, top as desired, and serve immediately.`,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Poached Eggs',
      recipe: `1.
      Bring a medium pot of water to a simmer, then reduce heat until it is barely quivering. It should register 180 to 190°F on an instant-read thermometer. Carefully break 1 egg into a small bowl, then tip into a fine mesh strainer. Carefully swirl egg around strainer, using your finger to rub off any excess loose egg whites that drop through. Gently tip egg into water. Swirl gently with a wooden spoon for 10 seconds, just until egg begins to set. Repeat straining and tipping with remaining eggs. Cook, swirling occasionally, until egg whites are fully set but yolks are still soft, about 4 minutes.
      
      2.
      Carefully lift eggs from pot with a slotted spoon. Serve immediately, or transfer to a bowl of cold water and refrigerate for up to 2 days. To serve, transfer to a bowl of hot water and let reheat for 2 minutes. Serve immediately.`,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Bacon',
      recipe: `1.
      Adjust oven rack to center position and preheat oven to 425°F (218°C). (If doubling recipe, adjust two racks to upper- and lower-middle positions; see note.)
      
      2.
      For Crisp, Wavy Bacon: Line a 13- by 18-inch rimmed baking sheet with aluminum foil. Arrange bacon strips on pan, overlapping as little as possible. Bake bacon for 10 minutes. Rotate pan and continue baking until bacon is as browned as you like it, 5 to 10 minutes longer for thin-cut or 10 to 15 minutes longer for thick-cut. Remove bacon from oven, transfer to a paper towel–lined plate to drain, and serve.
      3.
      For Chewy-Crisp Bacon: Tear off a 13- by 30-inch piece of aluminum foil and crimp it, accordion-style, into 1-inch sections. Stretch out foil and place it on a 13- by 18-inch rimmed baking sheet, folding up edges to catch drips. Arrange bacon strips on foil, overlapping as little as possible. Bake bacon for 10 minutes. Rotate pan and continue baking until bacon is as browned as you like it, 5 to 10 minutes longer for thin-cut, or 10 to 15 minutes longer for thick-cut. Remove bacon from oven, transfer to a paper towel–lined plate to drain, and serve.
      
      4.
      For Crisp, Flat Bacon for Sandwiches and Burgers: Line a 13- by 18-inch rimmed baking sheet with aluminum foil and top with a sheet of parchment paper. Arrange bacon strips on tray, overlapping as little as possible. Top with a second sheet of parchment paper; place a second baking sheet on top. Bake bacon until it's as crisp as you like it, 25 to 30 minutes for thin-cut, or 30 to 35 minutes for thick-cut. Remove trays from oven, carefully remove top tray using tongs and an oven mitt, transfer bacon to a paper towel–lined plate to drain, and serve.`,
      UserId: 1,
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
