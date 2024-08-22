const express = require('express');
const bannerController = require('../controllers/bannerController/banner');

const Router = express.Router();

Router.post('/create', bannerController.createBanner);
Router.get('/', bannerController.getBanners);
Router.delete('/:id', bannerController.deleteBanner);
Router.put('/:id', bannerController.updateBanner);

module.exports = Router;