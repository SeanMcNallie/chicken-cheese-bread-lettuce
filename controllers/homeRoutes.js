const axios = require('axios');
const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

//FETCH RANDOM RECIPIES
router.get('/', async (req, res) => {
  // fetch recipes
  const RECIPE_API_URL = 'https://api.spoonacular.com/recipes/random';
  const RECIPE_NUM = 12;
  const recipes = await axios.get(
    `${RECIPE_API_URL}?apiKey=${process.env.SPOONACULAR_API_KEY}&number=${RECIPE_NUM}`
  );

  console.log('RECIPES?', recipes.data);
  res.render('homepage', recipes.data);
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
