const router = require('express').Router();
const { List } = require('../../models');

router.post('/savedLists', async (req, res) => {
    try {
      const newList = await List.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newList);
    } catch (err) {
      res.status(400).json(err);
    }

    res.render('savedLists', {
       newlist  
    });
  });


  
  module.exports = router