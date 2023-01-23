const router = require('express').Router();
const { List } = require('../../models');

router.post('/savedLists', async (req, res) => {
  try {
    const newList = await List.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newList);

    //res.render('savedLists', {
      //newList,
   // });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
