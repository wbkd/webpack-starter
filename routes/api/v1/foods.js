var express = require('express');
var router = express.Router();
var foodsController = require('../../../controllers/api/v1/foods_controller.js');

router.get('/', (req,res) => {
  foodsController.index(req,res)
})


module.exports = router;
