const axios = require('axios');
const router = require('express').Router();

// /api/recipes

router.get('/search', async (req, res) => {
  const search = await axios.get('URL HERE');

  // parse search data here
  const searchResults = {};
  res.json(searchResults);
});

module.exports = router;
