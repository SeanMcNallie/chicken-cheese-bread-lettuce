const axios = require('axios');
const router = require('express').Router();
const { List, User } = require('../models');
const withAuth = require('../utils/auth');

//FETCH RANDOM RECIPIES
router.get('/', async (req, res) => {
  // fetch recipes
  const RECIPE_API_URL = 'https://api.spoonacular.com/recipes/random';
  const RECIPE_NUM = 12;
  const recipes = await axios.get(
    `${RECIPE_API_URL}?apiKey=${process.env.SPOONACULAR_API_KEY}&number=${RECIPE_NUM}`
    
  );
  //const ingrediants = recipes.extendedIngredients 
  //const ingrediantsString = JSON.stringify(ingrediants)

  console.log('RECIPES?', recipes.data);
  res.render('homepage', recipes.data);
  
});

// Use withAuth middleware to prevent access to route

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/savedLists');
    return;
  }
  res.render('login');
});

router.get('/shoppingList', (req, res) => {
  res.render('shoppingList');
});

router.get('/savedLists', async (req, res) => {
  const newListData = await List.findAll()
  const lists = newListData.map((list) => list.get({plain: true}))
   res.render('savedLists', {
    lists,
    });
});

module.exports = router;
