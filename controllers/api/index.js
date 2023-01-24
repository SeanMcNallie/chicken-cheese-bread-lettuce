const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const listRoutes = require('./listRoutes')
// const resultsRoutes = require('./resultsRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/lists', listRoutes);
// router.use('./results', resultsRoutes)

module.exports = router;
