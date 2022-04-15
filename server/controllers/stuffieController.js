require('../models/database');
const { rawListeners } = require('process');
const { isBuffer } = require('util');
const Category = require('../models/Category');
const Stuffie = require('../models/Stuffie');


/** 
 * GET /
 * Homepage
 */ 

exports.homepage = async(req, res) => {

  try {

    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
// query the latest recipes
    const latest = await Stuffie.find({}).sort({_id: -1}).limit(limitNumber);
    const teddyBear = await Stuffie.find({ 'category': 'Teddy Bear'}).limit(limitNumber);
    const careBear = await Stuffie.find({ 'category': 'Care Bear'}).limit(limitNumber);
    const toy = await Stuffie.find({ 'category': 'Toy'}).limit(limitNumber);
    const food = await Stuffie.find({ 'category': 'Food'}).limit(limitNumber);
    const animal = await Stuffie.find({ 'category': 'Animal'}).limit(limitNumber);

    const newest = { latest, teddyBear, careBear, toy, food, animal };

    res.render('index', { title: 'Stuffie Blog', categories, newest } );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }

}

// GET categories
exports.exploreCategories = async(req, res) => {
  try {
    const limitNumber = 10;
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', { title: 'Stuffie Blog - Categories', categories } );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

/** GET /categories/:id 
 * categories by id
*/ 
exports.exploreCategoriesById = async(req, res) => {
  try {
    let categoryId = req.params.id;
    const limitNumber = 10;
    const categoryById = await Stuffie.find({'category': categoryId}).limit(limitNumber);
    res.render('categories', { title: 'Stuffie Blog - Categories', categoryById } );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

/** GET stuffies:id
*/ 
exports.exploreStuffies = async(req, res) => {
  try {
    let stuffiesId = req.params.id;
    const stuffies = await Stuffie.findById(stuffiesId);

    res.render('stuffies', { title: 'Stuffie Blog - Stuffies', stuffies } );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}


/** POST /search
*/ 
exports.searchStuffies = async(req, res) => {

try {
    let searchTerm = req.body.searchTerm;
    let stuffie = await Stuffie.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
    res.render('search', { title: 'Stuffie Blog - Search', stuffie } );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

/** GET /explore-random 
 * Explore Random as JSON
*/ 

exports.exploreRandom = async(req, res) => {
  try {
    let count = await Stuffie.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let stuffie = await Stuffie.findOne().skip(random).exec();
    res.render('explore-random', { title: 'Stuffie Blog - Stuffies', stuffie } );
  } catch (error) {
    res.status(500).send({ message: error.message || "Error Occured" });
  }
}

/** GET /submit-stuffie 
 * Submit Stuffie
*/ 

exports.submitStuffie = async(req, res) => {
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
  res.render('submit-stuffie', { title: 'Stuffie Blog - Share Stuffie', infoErrorsObj, infoSubmitObj } );
}

/** POST /submit-stuffie 
 * Submit Stuffie
*/ 

exports.submitStuffieOnPost = async(req, res) => {

  try {

    let imageUploadFile;
    let uploadPath;
    let newImageName;

    if(!req.files || Object.keys(req.files).length === 0){
      console.log('No Files where uploaded.');
    } else {
      imageUploadFile = req.files.image;
      newImageName = Date.now() + imageUploadFile.name;

      uploadPath = require('path').resolve('./') + '/public/uploads/' + newImageName;

      imageUploadFile.mv(uploadPath, function(err){
        if(err) return res.status(500).send(err);
      })

    }

    const newStuffie = new Stuffie({
      name: req.body.name,
      color: req.body.color,
      description: req.body.description,
      category: req.body.category,
      image: newImageName
    });

    await newStuffie.save();

    req.flash('infoSubmit', 'Stuffie submitted. Sharing is Caring!')
    res.redirect('/submit-stuffie');
  } catch (error) {
    req.flash('infoErrors', error)
    res.redirect('/submit-stuffie');
  }
}

// GET /about

exports.about = async(req, res) => {
  res.render('about', { title: 'Stuffie Blog - About' } );
}

// GET /contact

exports.contact = async(req, res) => {
  res.render('contact', { title: 'Stuffie Blog - Contact' } );
}