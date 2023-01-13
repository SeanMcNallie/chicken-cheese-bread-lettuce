const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get(`./search`, async req, res) => {
  const search = await axios.get('/api.edamam.com/api/recipes/v2')

  // parse search data here
  const searchResults =();
  res.json(searchResults);
});


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
