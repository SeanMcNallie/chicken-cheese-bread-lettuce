
const router = require('express').Router();
const withAuth = require('../../utils/auth');

//FETCH SEARCHED RECIPIES
router.get('/', async (req, res) => {
  // fetch recipes
  const EDAMAM_API_URL = 'https://api.edamam.com/api/recipes/v2;
  const RECIPE_NUM = 12;
  const search = await axios.get(
    `${EDAMAM_API_URL}?apiKey=${process.env.EDAMAM_API_KEY}?apiID=${EDAMAM_ID}&number=${RECIPE_NUM}`
  );
  console.log('SEARCH?', search.data);
  res.render('search', search.data);
});
module.exports = router;

router.get(`./search`, async req, res) => {
  const search = await axios.get('/api.edamam.com/api/recipes/v2')

  // parse search data here
  const searchResults =();
  res.json(searchResults);
};


module.exports = router;

router.post('/', withAuth, async (req, res) => {
  try {
    const newrecipe = await recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newrecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

