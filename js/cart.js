/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById( 'cart' );
table.addEventListener( 'click', removeItemFromCart );
let cart;


// gets item array from --> local storage | or set cartTems as empty array
function loadCart() {
  const cartItems = JSON.parse( localStorage.getItem( 'cart' ) ) || [];
  cart = new Cart( cartItems );
  console.log ()
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementsByTagName( 'tbody' ).innerHtml = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbodyElement = document.getElementsByTagName( 'tbody' );
  // TODO: Iterate over the items in the cart
  for ( let i = 0 ; i < Cart.items.length ; i++ )
  {
  // TODO: Create a TR
    let trElement = document.createElement( 'tr' );

    // TODO: Create a TD for the delete link, quantity,  and the item
    let tdDeleteElement = document.createElement( 'td' );
    let tdItemElement = document.createElement( 'td' );
    let tdQutElement = document.createElement( 'td' );

    // tdDeleteElement.textContent = 'X';
    // tdItemElement.textContent = Cart.items[i].product;
    // tdQutElement.textContent = Cart.items[i].quantity;

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tdDeleteElement.appendChild( trElement );
    tdItemElement.appendChild( trElement );
    tdQutElement.appendChild( trElement );

    tbodyElement.appendChild( trElement );

  }
}

function removeItemFromCart( event ) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
