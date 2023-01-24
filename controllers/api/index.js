const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const listRoutes = require('./listRoutes')


router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/', listRoutes)


module.exports = router;
