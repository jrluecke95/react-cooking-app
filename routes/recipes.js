var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET users listing. */
router.post('/create', async (req, res) => {
  //check to make sure recipe has all fields filled out
  const { user } = req.session;

  if (!req.body.title || !req.body.recipe) {
    return res.status(400).json({
      error: 'please fill out all fields'
    })
  }

  const recipe = await models.Recipe.findOne({
    where: {
      title: req.body.title
    }
  })
  if (recipe) {
    return res.status(400).json({
      error: "recipe title already exists"
    })
  }

  const newRecipe = await models.Recipe.create({
    title: req.body.title,
    recipe: req.body.recipe,
    UserId: user.id,
  })

  return res.status(201).json(newRecipe)
})

router.get('/', async function(req, res) {
  const recipes = await models.Recipe.findAll({
    // sends back user data that we want - only uesr and id
    include: [
      {
        model: models.User, 
        attributes: ['username', 'id']
      }
    ]
  });
  res.json(recipes)
});

router.get('/:id', async function(req, res) {
  const recipe = await models.Recipe.findByPk(req.params.id)
  res.json(recipe)
})

module.exports = router;