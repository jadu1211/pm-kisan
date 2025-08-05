const express = require('express');
const router = express.Router();
const detailController = require('../controllers/detailController');

// Route to fetch user details
router.get('/detail/:uniqueid', detailController.getAllDetails);

module.exports = router;

