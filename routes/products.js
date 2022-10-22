const express = require("express");

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'));

router.use(express.urlencoded({ extended: true }));
const productCtrl = require("../controllers/products");

router.get('/product/add', productCtrl.product_create_get);
router.post('/product/add', productCtrl.product_create_post);
router.get('/product/index', productCtrl.product_index_get);
router.get('/product/detail', productCtrl.product_show_get);
router.get('/product/delete', productCtrl.product_delete_get);
router.get('/product/edit', productCtrl.product_edit_get);
router.put('/product/update', productCtrl.product_update_put);

module.exports = router;