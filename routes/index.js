const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.get('/getCards', cardController.getAllCards);
router.post('/api/cards', cardController.addCard);

module.exports = router;
