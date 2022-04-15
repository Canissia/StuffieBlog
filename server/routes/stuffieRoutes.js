const express = require('express');
const router = express.Router();
const stuffieController = require('../controllers/stuffieController');

// App Routes/ 

router.get('/', stuffieController.homepage);
router.get('/categories', stuffieController.exploreCategories);
router.get('/categories/:id', stuffieController.exploreCategoriesById);
router.get('/stuffie/:id', stuffieController.exploreStuffies);
router.post('/search', stuffieController.searchStuffies);
router.get('/explore-random', stuffieController.exploreRandom);
router.get('/submit-stuffie', stuffieController.submitStuffie);
router.get('/about', stuffieController.about);
router.get('/contact', stuffieController.contact);
router.post('/submit-stuffie', stuffieController.submitStuffieOnPost);



module.exports = router;