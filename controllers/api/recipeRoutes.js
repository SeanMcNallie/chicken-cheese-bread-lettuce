
//const router = require('express').Router();
const withAuth = require('../../utils/auth');

const axios = require('axios');


//FETCH SEARCHED RECIPES
router.get('/results', async (req, res) => {
  // fetch recipes
  const EDAMAM_API_URL = 'https://api.edamam.com/api/recipes/v2?type=public&app_id=d23bf0e9&app_key=a93650b63c7c6bf742878f52d5349438';
  const SEARCH_NUM = 12;
  const search = await axios.get(
    `${EDAMAM_API_URL}?apiKey=${process.env.EDAMAM_API_KEY}?apiID=${EDAMAM_ID}&number=${SEARCH_NUM}`
  );
  console.log('SEARCH?', search.data);
  res.render('results', search.data);
});
module.exports = router;


// router.get(`./search`, async req, res) => {
//   const search = await axios.get('/api.edamam.com/api/recipes/v2')


//module.exports = router;


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

//module.exports = router;

