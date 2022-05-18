// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(referenceId) {
  // 1. Loop for to the array products to get the item to add to cart

  let productToAdd;

  for ( let i = 0; i < products.length; i++ ) {

    if ( referenceId == products[i].id ) {
      productToAdd = products[i];
    }
  }
  // 2. Add found product to the cartList array
  
  cartList.push(productToAdd);
  console.log(cartList);
  
}

// Exercise 2
function cleanCart() {
  
  cartList = [];
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array

  var totalImport = 0;

  for ( let i = 0; i < cartList.length; i++) {

    totalImport += cartList[i].price;
  }

  console.log(`total import of cart: ${totalImport}`);
}

// Exercise 4
function generateCart(arrayToOptimize) {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  var cart = [];
  let productOnCart;

  for ( let i = 0; i < arrayToOptimize.length; i++){

    if ( cart.length === 0 ) {

      arrayToOptimize[i].quantity = 1;
      arrayToOptimize[i].subtotal = arrayToOptimize[i].price * arrayToOptimize[i].quantity;
      cart.push(arrayToOptimize[i]);

    } else {

      loop2:
      for ( let j = 0; j < cart.length; j++){

        if ( cart[j].id === arrayToOptimize[i].id ){

          productOnCart = true;
          
          cart[j].quantity += 1;
          cart[j].subtotal = cart[j].price * cart[j].quantity;
          break loop2;

        } else {

            productOnCart = false;
        }
      }

      if ( productOnCart === false ) {

        arrayToOptimize[i].quantity = 1;
        arrayToOptimize[i].subtotal = arrayToOptimize[i].price * arrayToOptimize[i].quantity;
        cart.push(arrayToOptimize[i]);
      }
    }
  }

  applyPromotionsCart(cart);
  console.log(cart);
}

// Exercise 5
function applyPromotionsCart(arrayForPromo) {
  // Apply promotions to each item in the array "cart"

  for ( let i = 0; i < arrayForPromo.length; i++){

    if (( arrayForPromo[i].id === 1 ) && ( arrayForPromo[i].quantity >= 3 )){

      let newPriceWithDiscount = 10;
      arrayForPromo[i].subtotalWithDiscount = newPriceWithDiscount * arrayForPromo[i].quantity;

    } else if (( arrayForPromo[i].id === 3 ) && ( arrayForPromo[i].quantity >= 10 )){

        let newPriceWithDiscount = (arrayForPromo[i].price * ( 2 / 3 )).toFixed(2);
        arrayForPromo[i].subtotalWithDiscount = newPriceWithDiscount * arrayForPromo[i].quantity;

    }
  }
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  
}



// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
