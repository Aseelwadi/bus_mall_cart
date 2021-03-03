/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById( 'cart' );
table.addEventListener( 'click', removeItemFromCart );
let tbodyElement = document.getElementsByTagName( 'tbody' );

let trHeadElementArr = document.getElementsByTagName ( 'tr' );
let trHeadElement = trHeadElementArr[0];

console.log( trHeadElementArr[0] );


let cart;
let imageName;
// gets item array from --> local storage | or set cartTems as empty array
function loadCart() {
  const cartItems = JSON.parse( localStorage.getItem( 'cart' ) ) || [];
  cart = new Cart( cartItems ); // new object of Cart constructor --> its items [] has data from local storage


  //console.log( cart );
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

  tbodyElement.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let thElement = document.createElement ( 'th' );
  trHeadElement.appendChild( thElement );
  thElement.textContent = 'Images';

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  for ( let i = 0 ; i < cart.items.length ; i++ )
  {
  // TODO: Create a TR
    let trElement = document.createElement( 'tr' );

    // TODO: Create a TD for the delete link, quantity,  and the item
    let tdDeleteElement = document.createElement( 'td' );
    let tdItemElement = document.createElement( 'td' );
    let tdQutElement = document.createElement( 'td' );


    let tdImageElement = document.createElement ( 'td' );
    let imageElement = document.createElement ( 'img' );




    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    trElement.appendChild( tdDeleteElement );
    trElement.appendChild( tdItemElement );
    trElement.appendChild( tdQutElement );


    trElement.appendChild( tdImageElement );
    tdImageElement.appendChild( imageElement );





    tdDeleteElement.textContent = 'X';
    tdItemElement.textContent = cart.items[i].product;
    tdQutElement.textContent = cart.items[i].quantity;


    // images ------------------------

    imageName = cart.items[i].product;


    for ( let j = 0 ; j < Product.allProducts.length ; j++ )
    {

      if ( imageName === Product.allProducts[j].name )
      {
        imageElement.src = Product.allProducts[j].filePath;
        imageElement.style.width = '60px';
        console.log( Product.allProducts[j].filePath );
      }
    }


    tbodyElement[0].appendChild( trElement );
  }

  table.appendChild( tbodyElement[0] );

}




function removeItemFromCart( event ) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item

  if ( event.target.textContent === 'X' )
  {
    let clicked = event.target;

    let content = clicked.nextSibling.textContent;
    let deletedRow = clicked.parentNode;
    //console.log(deletedRow);
    for ( let i = 0 ; i < cart.items.length; i++ )
    {
      if ( content === cart.items[i].product )
      {
        cart.removeItem( i );
        // // TODO: Save the cart back to local storage
        localStorage.setItem( 'cart', JSON.stringify( cart.items ) );
        deletedRow.remove();
        // TODO: Re-draw the cart table
      }
    }

  }}

// This will initialize the page and draw the cart on screen
renderCart();
