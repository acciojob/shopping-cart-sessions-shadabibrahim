// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList =    document.getElementById("cart-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onCLick = addToCart("${product.id}") >Add to Cart</button>`;
    productList.appendChild(li);
  });
	getData(); 
}
 
// Render cart list
function renderCart() { 
	getData();
}
 
// Add item to cart
function addToCart(productId) { 
	products.forEach((item)=>{ 
		if(item.id == productId){
			const li = document.createElement('li');
		li.innerHTML = `${item.name} - $${item.price} <button onCLick =  removeFromCart(${item.id})>Remove From Cart</button>`;
		cartList.appendChild(li);
		}
		
	})
	setData();
}
  
// Remove item from cart
function removeFromCart(productId) { 
		// alert(productId);
cartList.removeChild(cartList.children[0]);
	setData();
	
}

// Clear cart

function clearCart() {
  	cartList.remove(); 
}
function setData(){
	localStorage.setItem("data",cartList.innerHTML)
	
}
function getData(){
	 cartList.innerHTML = localStorage.getItem("data");
}
// Initial render
renderProducts();
renderCart();
getData();