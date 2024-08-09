const products = [
    { 
        id: 1, 
        name: "Mobile", 
        price: 10, 
        description: "This is a Mobile Phone", 
        imageUrl: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    { 
        id: 2, 
        name: "Laptop",
        price: 20, 
        description: "This is a Laptop", 
        imageUrl: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600" 
    },
    {
        id: 3,
        name: "Headphones",
        price: 50,
        description: "wireless headphone",
        imageUrl: "https://images.pexels.com/photos/6700057/pexels-photo-6700057.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 4,
        name: "Smartwatch",
        price: 150,
        description: "This is a smartwatch.",
        imageUrl: "https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 5,
        name: "Coffee Maker",
        price: 30,
        description: "This is Coffe Maker",
        imageUrl: "https://images.pexels.com/photos/25526613/pexels-photo-25526613/free-photo-of-white-moka-espresso-maker.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 6,
        name: "Washing",
        price: 250,
        description: "Washing machine",
        imageUrl: "https://images.pexels.com/photos/5591575/pexels-photo-5591575.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 7,
        name: "Speaker",
        price: 75,
        description: "This is Speaker",
        imageUrl: "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 8,
        name: "Cable",
        price: 20,
        description: "This is cable",
        imageUrl: "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 9,
        name: "Mic",
        price: 80,
        description: "This is Mic",
        imageUrl: "https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 10,
        name: "Camera",
        price: 40,
        description: "This is Camera.",
        imageUrl: "https://images.pexels.com/photos/339379/pexels-photo-339379.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 11,
        name: "SmartTV",
        price: 400,
        description: "Smart TV.",
        imageUrl: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 12,
        name: "Charger",
        price: 25,
        description: "This is Charger",
        imageUrl: "https://images.pexels.com/photos/218445/pexels-photo-218445.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
      
];

const productList = document.getElementById('product-list');

function displayProducts() {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1});
    }
    updateCart();
}

function updateCart() {
    const cartSection = document.getElementById('shopping-cart');
    cartSection.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Quantity: 
                <button onclick="decreaseQuantity(${item.id})">-</button>
                ${item.quantity}
                <button onclick="increaseQuantity(${item.id})">+</button>
            </p>
            <p>Price: $${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartSection.appendChild(cartItem);
    });
}

function increaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    cartItem.quantity++;
    updateCart();
}

function decreaseQuantity(productId) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem.quantity > 1) {
        cartItem.quantity--;
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Order placed successfully!');
}

displayProducts();
