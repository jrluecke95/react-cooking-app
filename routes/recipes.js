var express = require('express');
var router = express.Router();
const models = require('../models');
const checkAuth = require('../auth/CheckAuth');

/* GET users listing. */
router.post('/create', checkAuth, async (req, res) => {
  //check to make sure recipe has all fields filled out
  const { user } = req.session;
  // checks to see if fields are filled out
  if (!req.body.title || !req.body.recipe) {
    return res.status(400).json({
      error: 'please fill out all fields'
    })
  }
// checks to make sure title doesnt already exist 
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
// creates new recipe
  const newRecipe = await models.Recipe.create({
    title: req.body.title,
    recipe: req.body.recipe,
    UserId: user.id,
  })

  return res.status(201).json(newRecipe)
})

router.get('/', async (req, res) => {
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

router.get('/getrecipe/:id', async (req, res) => {
  const recipe = await models.Recipe.findByPk(req.params.id)
  res.json(recipe)
})

router.get('/userrecipes', async (req, res) => {
  const { user } = req.session;
  const recipes = await models.Recipe.findAll({
    where: {
      UserId: user.id
    }
  })
  res.json(btoa(recipes))
})

router.post('/:id/addcomment', checkAuth, async (req, res) => {
  const recipe = await models.Recipe.findByPk(req.params.id)
  if (!recipe) {
    return res.status(404).json({
      error: "could not find recipe with that id"
    })
  }

  if (!req.body.text) {
    res.status(400).json({
      error: "please include all required fields"
    })
  }

  const comment = await recipe.createComment({
    text: req.body.text,
    RecipeId: req.params.id,
    UserId: req.session.user.id
  })

  res.status(201).json(comment)
})

router.get('/:id/getcomments', async (req, res) => {
  const recipe = await models.Recipe.findByPk(req.params.id)
  if (!recipe) {
    return res.status(404).json({
      error: "could not find recipe with that id"
    })
  }

  const comments = await recipe.getComments({
    include: [{ model: models.User, attributes: ['username', 'id'] }]
  })

  res.status(201).json(comments)
})

router.post('/:id/addrating', checkAuth, async (req, res) => {
  const recipe = await models.Recipe.findByPk(req.params.id)
  if (!recipe) {
    return res.status(404).json({
      error: "could not find recipe with that id"
    })
  }

  const rating = await recipe.createRating({
    score: req.body.score,
    RecipeId: req.params.id,
    UserId: req.session.user.id
  })

  res.status(201).json(rating)
})

router.get('/:id/getrating', async (req, res) => {
  const recipe = await models.Recipe.findByPk(req.params.id)
  if (!recipe) {
    return res.status(404).json({
      error: "could not find recipe with that id"
    })
  }

  const ratings = await recipe.getRatings()
  let totalSum = 0;
  let totalRatings = 0;
  for (const rating of ratings) {
    totalSum += rating.score;
    totalRatings++;
  }
  const averageRating = totalSum / totalRatings

  res.json(averageRating.toFixed(2))
})

router.post('/:id/editrecipe', checkAuth, async (req, res) => {
  const recipe = await models.Recipe.update({
    title: req.body.title,
    recipe: req.body.recipe 
  }, {
    where: {
      id: req.params.id
    }
  })
  res.status(204).json(recipe)
})

module.exports = router;