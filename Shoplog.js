let productHTML = '';
products.forEach((product) => {
   productHTML = productHTML + `<div class="cart">
   <img class="Basketball" src="${product.image}" alt="">
   <div class="product-name">${product.name}</div>
   <div class="product-price">$ ${product.price}
   <span class="Added-to-cart">Added<i class="fa-solid fa-circle-check"></i></span>
   </div>
   <button class="Add-button js-cart-button
   "data-product-name="${product.name}" data-product-price="${product.price}">Add to cart</button>
  </div>`
})

document.querySelector('.js-General-div').innerHTML = productHTML


document.querySelectorAll('.js-cart-button')
.forEach((AddButton)=>{
 AddButton.addEventListener('click',()=>{
 const productAdd = AddButton.dataset.productName
 let priceAdd = AddButton.dataset.productPrice
 let Price = Number(priceAdd)
 let matchingItem ='';
 Cart.forEach((item)=>{
   if(productAdd === item.productName){
    matchingItem = item
   }
  }) 
  let cartQuantity = 0;
  Cart.forEach((item)=>{
    cartQuantity = cartQuantity + item.quantity ;
  })
   document.querySelector('.js-cart-size').innerHTML = cartQuantity
 
  
  if(matchingItem){
    matchingItem.quantity = matchingItem.quantity + 1
   Price = Price + Price
   }else{
    Cart.push({
      productName: productAdd,
      quantity: 1,
      productPrice:'$'+ Price 
    }) 
   }
   

     
   
     
    console.log(Cart)
  })
  
})
