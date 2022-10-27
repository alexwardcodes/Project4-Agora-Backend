const {Cart} = require("../models/Cart");
const {User} = require("../models/User");
const {Product} = require("../models/Product");
const { isValidObjectId } = require("mongoose");
var ObjectID = require('mongodb').ObjectId;

const moment = require('moment');

// exports.cart_create_get = (req, res) => {
//     // res.render();
//     Product.find()
//     .then((products) => {
//     res.render("cart/add", {products});
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }

// exports.cart_index_get = (req, res) => {
//     res.render("cart/index")
// }

// exports.cart_create_post = (req, res) => {
//     console.log(req.body);
//     // res.send("POST WORKS")
//     // Saving the data into the database
//     let cart = new Cart(req.body);
//     cart.save()
//     .then(() => {
//         req.body.product.forEach(product => {
//             Product.findById(product, (error, seller) => {
//                 seller.product.push(product);
//                 seller.save();
//             })
//         });
//         res.redirect('/cart/index');
//         // res.json({product})
//     })
//     .catch((err) => {
//         console.log(err);
//         res.send("Please try again later");
//     })
// }

exports.addItemToCart = async (req, res) => {
  let userId = req.query.userId;
  let user = await User.exists({ _id: userId });
  if (!userId || !isValidObjectId(userId) || !user)
    return res.status(400).send({ status: false, message: "Invalid user ID" });

  let product = Product.findById(req.query.productId);
  

  if (!product)
    return res.status(400).send({ status: false, message: "Invalid product" });

  else {
    product = Product.findById(req.query.productId)
    .then( async (product) => {
      let cart = await Cart.findOne({userId: userId});

        if (cart) {
            let i = cart.products.findIndex((p) => p.productId == product);
            console.log("index is " + i)
        
            if (i > -1) {
              let productItem = cart.products[i];
              productItem.quantity += 1;
              cart.products[i] = productItem;
            } else {
          cart.products.push({ productId: product, quantity: 1 });  
          cart.save();   
          console.log(cart)
          return res.status(200).send({ status: true, updatedCart: cart });
        }
        } 
        else {
          const newCart = Cart.create({
            userId,
            products: [{ productId: product, quantity: 1 }],
          });
      
          return res.status(201).send({ status: true, newCart: newCart });
        }
    }) 
    .catch((err) => {
      console.log(err)
    })
  }

}
      












// // Won't need to be used in React
// exports.product_show_get  = (req, res) => {
//     console.log(req.query.id);
//     // Find ingredient by id
//     // Product.findById(req.query.id).populate('recipe')
//     Product.findById(req.query.id).populate('seller')
//     .then(product => {
//         res.render('product/detail', {product, moment});
//     })
//     .catch((err) => {
//        console.log(err);
//     })
// }

// exports.cart_delete_get = (req, res) => {
//     console.log(req.query.id);

//     Product.findByIdAndDelete(req.query.id)
//     // .then((product) => {}) for React
//     .then(() => {
//         res.redirect(('/product/index'));
//         // res.json({product})
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }


// exports.product_edit_get = (req, res) => {
//     Product.findById(req.query.id)
//     .then((product) => {
//         res.render('product/edit', {product});
//         // res.json({product})
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }



exports.getCart = async (req, res) => {
  let userId = req.query.userId.trim();
  let user = await User.findById(userId);

  if (!userId || !isValidObjectId(userId) || !user)
    return res.status(400).send({ status: false, message: "Invalid user ID" });

  let cart = await Cart.findOne({ userId: userId })
    .populate("products.productId")
    .then((cart) => {
      return cart
  })

  try {
    if (!cart){
      return res
      .status(404)
      .send({ status: false, message: "Cart not found for this user" });
    } 
    else{
      let total = 0;
      cart.products.map((product) => {
        total += ((product.quantity * product.productId.price) + product.productId.shippingRate)
        return total
      })
      cart.total = total;
      res.status(200).json({cart});
    }

  } catch (error) {
    console.log(error);
  }
};


// exports.decreaseQuantity = async (req, res) => {
//   // use add product endpoint for increase quantity
//   let userId = req.params.userId;
//   let user = await User.exists({ _id: userId });
//   let productId = req.body.productId;

//   if (!userId || !isValidObjectId(userId) || !user)
//     return res.status(400).send({ status: false, message: "Invalid user ID" });

//   let cart = await Cart.findOne({ userId: userId });
//   if (!cart)
//     return res
//       .status(404)
//       .send({ status: false, message: "Cart not found for this user" });

//   let itemIndex = cart.products.findIndex((p) => p.productId == productId);

//   if (itemIndex > -1) {
//     let productItem = cart.products[itemIndex];
//     productItem.quantity -= 1;
//     cart.products[itemIndex] = productItem;
//     cart = await cart.save();
//     return res.status(200).send({ status: true, updatedCart: cart });
//   }
//   res
//     .status(400)
//     .send({ status: false, message: "Item does not exist in cart" });
// };

exports.removeItem = async (req, res) => {
  let userId = req.query.userId;
  let user = await User.exists({ _id: userId });
  let productId = req.body.productId;

  if (!userId || !isValidObjectId(userId) || !user)
    return res.status(400).send({ status: false, message: "Invalid user ID" });

  let cart = await Cart.findOne({ userId: userId });
  if (!cart)
    return res
      .status(404)
      .send({ status: false, message: "Cart not found for this user" });

  let itemIndex = cart.products.findIndex((p) => p.productId == productId);
  if (itemIndex > -1) {
    cart.products.splice(itemIndex, 1);
    cart = await cart.save();
    return res.status(200).send({ status: true, updatedCart: cart });
  }
  res
    .status(400)
    .send({ status: false, message: "Item does not exist in cart" });
};


exports.shippingAndBilling = async (req, res) => {
  let userId = req.params.userId.trim();
  let user = await User.findById(userId);

  let shipping = await user.shippingAddress.addressLine1
  console.log("shipping is " + shipping)
  try{
    let shippingParams = {
      "shippingAddress.addressLine1": req.body.addressLine1S,
      "shippingAddress.addressLine2": req.params.addressLine2S,
      "shippingAddress.city": req.body.cityS,
      "shippingAddress.country": req.body.countyS,
      "shippingAddress.postCode": req.body.postCodeS
    }      
    User.findOneAndUpdate({_id: userId}, shippingParams);
  }
  catch(error){
    console.log(error)
  } 
  
  let billing = await user.billingAddress.addressLine1  
  console.log("billing is " + billing)
  try{
    let billingParams = {
      "billingAddress.addressLine1": req.body.addressLine1B,
      "billingAddress.addressLine2": req.params.addressLine2B,
      "billingAddress.city": req.body.cityB,
      "billingAddress.country": req.body.countyB,
      "billingAddress.postCode": req.body.postCodeB
    }      
    User.findOneAndUpdate({_id: userId}, billingParams);
  }
  catch(error){
    console.log(error)
  } 
}  
