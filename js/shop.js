// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
/* function buy(referenceId) {
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
  
} */

// Exercise 2
/* function cleanCart() {
  
  cartList = [];
  console.log(cartList);
} */

// Exercise 3
/* function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array

  var totalImport = 0;

  for ( let i = 0; i < cartList.length; i++) {

    totalImport += cartList[i].price;
  }

  console.log(`total import of cart: ${totalImport}`);
} */

// Exercise 4
/* function generateCart(arrayToOptimize) {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  cart = [];
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
} */

// Exercise 5
function applyPromotionsCart(arrayForPromo) {
  // Apply promotions to each item in the array "cart"

  for ( let i = 0; i < arrayForPromo.length; i++){

    if (( arrayForPromo[i].id === 1 ) && ( arrayForPromo[i].quantity >= 3 )){

      let newPriceWithDiscountId1 = 10;
      arrayForPromo[i].subtotalWithDiscount = newPriceWithDiscountId1 * arrayForPromo[i].quantity;

    } else if (( arrayForPromo[i].id === 3 ) && ( arrayForPromo[i].quantity >= 10 )){

        let newPriceWithDiscountId3 = (arrayForPromo[i].price * ( 2 / 3 )).toFixed(2);
        arrayForPromo[i].subtotalWithDiscount = newPriceWithDiscountId3 * arrayForPromo[i].quantity;

    }
  }
}

// Exercise 6
function printCart() {

  // Fill the shopping cart modal manipulating the shopping cart dom

  let productsTable = '';
  let priceTotalProducts = 0;
  let totalImportCart = 0;

  for ( let i = 0; i < cart.length; i++) {

    ( cart[i].subtotalWithDiscount ) ? ( priceTotalProducts = cart[i].subtotalWithDiscount ) : ( priceTotalProducts = cart[i].subtotal );

    productsTable += `<tr><th scope='row'>${cart[i].name}</th><td>$${cart[i].price}</td><td>${cart[i].quantity}</td><td>$${priceTotalProducts}</td></tr>`

    totalImportCart += priceTotalProducts;
  }

  document.getElementById('cart_list').innerHTML = productsTable;
  document.getElementById('total_price').innerHTML = totalImportCart;
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.

  // Callback function to found product to add or modify

  const productOnCart = products => products.id === id; 


  // .findIndex(): Method to execute the callback function once for every index in the array until it finds the one where callbackFn returns a truthy value
  
  let i = products.findIndex( productOnCart ); // Index in the array products[] for the product to add

  let j = cart.findIndex( productOnCart ); // Index in the array cart[] for the product to modify



  // Search in the array cart[] for the product to add

  if ( j === -1 ) {   // -1 meaning the product isn't in the array cart, so it should be add

    products[i].quantity = 1;
    products[i].subtotal = products[i].price * products[i].quantity;
    cart.push(products[i]);

  } else {  // Instead the product should be modify because it's already in the cart array

    cart[j].quantity += 1;
    cart[j].subtotal = cart[j].price * cart[j].quantity;
  }


  applyPromotionsCart(cart);
  console.log(cart);
}


function cleanCart() {
  
  cart = [];
  printCart();
  console.log(cart);
}


function calculateTotal() {
  // Calculate total price of the cart

  var totalImport = 0;

  for ( let i = 0; i < cart.length; i++) {

    totalImport += cart[i].subtotal;
  }

  console.log(`total import of cart: ${totalImport}`);
}



// Exercise 9
function removeFromCart(id) {
  /* Has de completar la funció removeFromCart(), la qual rep l'id del producte per al qual es deu decrementar la seva quantitat en una unitat.

  Tingues en compte que si la quantitat del producte a decrementar és 1, has d'eliminar-lo del carret, no passar la seva quantitat a 0.

  Recordar actualitzar les promocions. */



}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
