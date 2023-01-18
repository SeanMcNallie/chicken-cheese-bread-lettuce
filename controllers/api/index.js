const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const recipeRoutes = require('./recipeRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
