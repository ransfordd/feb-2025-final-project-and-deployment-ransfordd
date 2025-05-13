// Sample product data
const products = [
    {
        id: 1,
        name: "MacBook Pro 16-inch M3 Pro",
        price: 2499.99,
        category: "laptops",
        image: "images/MACBOOK PRO.jpeg",
        description: "Apple M3 Pro chip, 16GB RAM, 512GB SSD"
    },
    {
        id: 2,
        name: "Dell XPS 15",
        price: 1999.99,
        category: "laptops",
        image: "images/DELL XPS 15.jpg",
        description: "Intel i9, 32GB RAM, 1TB SSD, RTX 4070"
    },
    {
        id: 3,
        name: "Lenovo ThinkPad X1 Carbon",
        price: 1799.99,
        category: "laptops",
        image: "images/lenovo thinkpad x1.jpeg",
        description: "Intel i7, 16GB RAM, 512GB SSD"
    },
    {
        id: 4,
        name: "HP Spectre x360",
        price: 1299.99,
        category: "laptops",
        image: "images/hp 360.jpeg",
        description: "Intel i7, 16GB RAM, 1TB SSD"
    },
    {
        id: 5,
        name: "ASUS ROG Zephyrus G14",
        price: 1599.99,
        category: "laptops",
        image: "images/ASUS ROG ZEPHYRUS.jpeg",
        description: "AMD Ryzen 9, 32GB RAM, RTX 4090"
    },
    {
        id: 6,
        name: "Samsung Odyssey G9",
        price: 999.99,
        category: "monitors",
        image: "images/Samsung ODYSSEY.jpg",
        description: "49-inch Curved Gaming Monitor, 240Hz"
    },
    {
        id: 7,
        name: "LG UltraGear 27GP950",
        price: 799.99,
        category: "monitors",
        image: "images/LG UltraGear 27GP950.jpg",
        description: "27-inch 4K Nano IPS, 144Hz"
    },
    {
        id: 8,
        name: "Dell Ultrasharp U2723QE",
        price: 699.99,
        category: "monitors",
        image: "images/DELL ULTRASHARP 27.jpeg",
        description: "27-inch 4K USB-C Hub Monitor"
    },
    {
        id: 9,
        name: "Apple Studio Display",
        price: 1599.99,
        category: "monitors",
        image: "images/apple-studio-display-19.jpg",
        description: "27-inch 5K Retina Display"
    },
    {
        id: 10,
        name: "ASUS ProArt PA32UCG",
        price: 3999.99,
        category: "monitors",
        image: "images/PROART.jpeg",
        description: "32-inch 4K HDR Professional Monitor"
    },
    {
        id: 11,
        name: "iPhone 15 Pro Max",
        price: 1199.99,
        category: "phones",
        image: "images/iphone-15-pro-max.jpg",
        description: "256GB, Titanium Black"
    },
    {
        id: 12,
        name: "Samsung Galaxy S24 Ultra",
        price: 1199.99,
        category: "phones",
        image: "images/Samsung Galaxy S24 Ultra.jpg",
        description: "256GB, Phantom Black"
    },
    {
        id: 13,
        name: "Google Pixel 8 Pro",
        price: 999.99,
        category: "phones",
        image: "images/google-pixel-8.jpg",
        description: "256GB, Obsidian"
    },
    {
        id: 14,
        name: "OnePlus 12",
        price: 899.99,
        category: "phones",
        image: "images/ONEPLUS 12.jpeg",
        description: "256GB, Eternal Green"
    },
    {
        id: 15,
        name: "Sony WH-1000XM5",
        price: 399.99,
        category: "headphones",
        image: "images/Sony WH-1000XM5.jpeg",
        description: "Wireless Noise Cancelling Headphones"
    },
    {
        id: 16,
        name: "Apple AirPods Pro 2",
        price: 249.99,
        category: "headphones",
        image: "images/AIRPODS PRO.jpg",
        description: "USB-C Charging Case"
    },
    {
        id: 17,
        name: "Bose QuietComfort 45",
        price: 329.99,
        category: "headphones",
        image: "images/Bose QuietComfort 45.jpeg",
        description: "Wireless Noise Cancelling Headphones"
    },
    {
        id: 18,
        name: "Sennheiser HD 660S2",
        price: 499.99,
        category: "headphones",
        image: "images/Sennheiser HD 660S2.jpeg",
        description: "Open Back Headphones"
    },
    {
        id: 19,
        name: "Epson PowerLite 2250U",
        price: 699.99,
        category: "projectors",
        image: "images/Epson PowerLite 2250U.jpeg",
        description: "4K PRO-UHD Projector"
    },
    {
        id: 20,
        name: "BenQ HT2050A",
        price: 749.99,
        category: "projectors",
        image: "images/BenQ HT2050A.jpeg",
        description: "1080p Home Theater Projector"
    },
    {
        id: 21,
        name: "Optoma UHD38",
        price: 899.99,
        category: "projectors",
        image: "images/OPTOMA UHD38.jpg",
        description: "4K UHD Gaming Projector"
    },
    {
        id: 22,
        name: "ViewSonic PX701-4K",
        price: 799.99,
        category: "projectors",
        image: "images/ViewSonic PX701-4K.jpeg",
        description: "4K Home Theater Projector"
    },
    {
        id: 23,
        name: "NVIDIA RTX 4090",
        price: 1599.99,
        category: "components",
        image: "images/NVIDIA RTX 4090.jpeg",
        description: "24GB GDDR6X Graphics Card"
    },
    {
        id: 24,
        name: "AMD Ryzen 9 7950X",
        price: 699.99,
        category: "components",
        image: "images/AMD Ryzen 9 7950X.jpg",
        description: "16-Core Desktop Processor"
    },
    {
        id: 25,
        name: "Intel Core i9-14900K",
        price: 589.99,
        category: "components",
        image: "images/INTEL CORE I9.jpeg",
        description: "24-Core Desktop Processor"
    },
    {
        id: 26,
        name: "Samsung 990 Pro SSD",
        price: 199.99,
        category: "components",
        image: "images/Samsung 990 Pro SSD.jpeg",
        description: "2TB NVMe SSD"
    },
    {
        id: 27,
        name: "Corsair Vengeance RGB",
        price: 159.99,
        category: "components",
        image: "images/Corsair Vengeance RGB.jpeg",
        description: "32GB DDR5 RAM Kit"
    },
    {
        id: 28,
        name: "ASUS ROG Strix Z790",
        price: 449.99,
        category: "components",
        image: "images/ASUS ROG Strix Z790.jpg",
        description: "Gaming Motherboard"
    },
    {
        id: 29,
        name: "Corsair H150i Elite",
        price: 199.99,
        category: "components",
        image: "images/Corsair H150i Elite.jpeg",
        description: "360mm Liquid CPU Cooler"
    },
    {
        id: 30,
        name: "EVGA SuperNOVA 1000W",
        price: 249.99,
        category: "components",
        image: "images/EVGA SuperNOVA 1000W.jpeg",
        description: "80+ Gold PSU"
    },
    {
        id: 31,
        name: "Lian Li O11 Dynamic",
        price: 159.99,
        category: "components",
        image: "images/LIAN LI O11.jpeg",
        description: "Mid Tower Case"
    },
    {
        id: 32,
        name: "Logitech MX Master 3S",
        price: 99.99,
        category: "accessories",
        image: "images/LOGITECH MX MASTER 3S.jpg",
        description: "Wireless Mouse"
    },
    {
        id: 33,
        name: "Keychron Q1 Pro",
        price: 199.99,
        category: "accessories",
        image: "images/KEYCHRON Q1.jpeg",
        description: "Wireless Mechanical Keyboard"
    },
    {
        id: 34,
        name: "Elgato Stream Deck",
        price: 149.99,
        category: "accessories",
        image: "images/Elgato Stream Deck.jpeg",
        description: "15-Key Stream Controller"
    },
    {
        id: 35,
        name: "Samsung T7 Shield",
        price: 129.99,
        category: "accessories",
        image: "images/SAMSUNG T7 SHIELD.jpeg",
        description: "2TB Portable SSD"
    },
    {
        id: 36,
        name: "Apple Mac Studio",
        price: 1999.99,
        category: "desktops",
        image: "images/APPLE STUDIO.jpeg",
        description: "M2 Max, 32GB RAM, 512GB SSD"
    },
    {
        id: 37,
        name: "Dell XPS Desktop",
        price: 1799.99,
        category: "desktops",
        image: "images/Dell XPS Desktop.jpeg",
        description: "Intel i9, 32GB RAM, RTX 4080"
    },
    {
        id: 38,
        name: "HP Omen 45L",
        price: 2499.99,
        category: "desktops",
        image: "images/HP OMEN 45L.jpg",
        description: "Intel i9, 64GB RAM, RTX 4090"
    },
    {
        id: 39,
        name: "ASUS ProArt Station",
        price: 2999.99,
        category: "desktops",
        image: "images/PROART RTX 4080.jpeg",
        description: "Intel i9, 64GB RAM, RTX 4080"
    },
    {
        id: 40,
        name: "Corsair K100 RGB",
        price: 229.99,
        category: "accessories",
        image: "images/Corsair K100 RGBiiiii.jpg",
        description: "Mechanical Gaming Keyboard"
    },
    {
        id: 41,
        name: "Razer DeathAdder V3 Pro",
        price: 159.99,
        category: "accessories",
        image: "images/RAZER DEATHADDER.png",
        description: "Wireless Gaming Mouse"
    },
    {
        id: 42,
        name: "SteelSeries Arctis Nova Pro",
        price: 349.99,
        category: "headphones",
        image: "images/Steelseries-Arctis-Nova-Pro.jpg",
        description: "Wireless Gaming Headset"
    },
    {
        id: 43,
        name: "Samsung Galaxy Book3 Ultra",
        price: 2199.99,
        category: "laptops",
        image: "images/Samsung Galaxy Book3 Ultra.jpeg",
        description: "Intel i9, 32GB RAM, RTX 4070"
    },
    {
        id: 44,
        name: "Microsoft Surface Laptop Studio",
        price: 1899.99,
        category: "laptops",
        image: "images/Microsoft Surface Laptop Studio.jpeg",
        description: "Intel i7, 32GB RAM, RTX 3050 Ti"
    },
    {
        id: 45,
        name: "Acer Predator Helios 16",
        price: 1999.99,
        category: "laptops",
        image: "images/Acer Predator Helios 16.jpeg",
        description: "Intel i9, 32GB RAM, RTX 4080"
    },
    {
        id: 46,
        name: "MSI GE76 Raider",
        price: 2499.99,
        category: "laptops",
        image: "images/MSI GE76 Raider.jpeg",
        description: "Intel i9, 64GB RAM, RTX 4090"
    },
    {
        id: 47,
        name: "Alienware AW3423DW",
        price: 1299.99,
        category: "monitors",
        image: "images/Alienware AW3423DW.jpg",
        description: "34-inch QD-OLED Gaming Monitor"
    },
    {
        id: 48,
        name: "ASUS ROG Swift PG279QM",
        price: 899.99,
        category: "monitors",
        image: "images/ASUS ROG Swift PG279QM.jpg",
        description: "27-inch 1440p 240Hz Monitor"
    },
    {
        id: 49,
        name: "ViewSonic XG271QG",
        price: 599.99,
        category: "monitors",
        image: "images/viewsonic elite XG271.jpeg",
        description: "27-inch 1440p 165Hz Monitor"
    },
    {
        id: 50,
        name: "BenQ ZOWIE XL2566K",
        price: 499.99,
        category: "monitors",
        image: "images/BENQ ZOWIE.jpeg",
        description: "24.5-inch 1080p 360Hz Monitor"
    },

    {
        id: 51,
        name: "ARCTIS NOVA PRO.png",
        price: 199.99,
        category: "headphones",
        image: "images/ARCTIS NOVA PRO.png",
        description: "Headphones"
    }

    
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Product added to cart!');
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// Update cart item quantity
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(0, newQuantity);
        if (item.quantity === 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            renderCart();
        }
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Render products
function renderProducts(filteredProducts = products) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;

    productsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart">Add to Cart</button>
        </div>
    `).join('');
}

// Render cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');

    if (!cartItems) return;

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-item">×</button>
        </div>
    `).join('');

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;

    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingElement) shippingElement.textContent = `$${shipping.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

// Get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Filter products
function filterProducts() {
    const categorySelect = document.getElementById('category');
    const priceSelect = document.getElementById('price');

    if (!categorySelect || !priceSelect) return;

    const category = categorySelect.value;
    const priceRange = priceSelect.value;

    let filtered = products;

    if (category !== 'all') {
        filtered = filtered.filter(product => product.category === category);
    }

    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        filtered = filtered.filter(product => {
            if (max) {
                return product.price >= min && product.price <= max;
            } else {
                // For "2000 and above" range
                return product.price >= 2000;
            }
        });
    }

    renderProducts(filtered);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (navLinks && hamburger) {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart count
    updateCartCount();

    // Add event listeners for filters
    const categorySelect = document.getElementById('category');
    const priceSelect = document.getElementById('price');
    
    if (categorySelect) {
        // Check for category parameter in URL
        const categoryParam = getUrlParameter('category');
        if (categoryParam) {
            categorySelect.value = categoryParam;
        }
        categorySelect.addEventListener('change', filterProducts);
    }
    
    if (priceSelect) {
        priceSelect.addEventListener('change', filterProducts);
    }

    // Add event listener for mobile menu
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);

    // Render products or cart based on current page
    if (document.getElementById('products-container')) {
        // Apply initial filtering if category parameter exists
        if (getUrlParameter('category')) {
            filterProducts();
        } else {
            renderProducts();
        }
    }
    if (document.getElementById('cart-items')) {
        renderCart();
    }

    // Add checkout button event listener
    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty!');
            } else {
                showNotification('Thank you for your purchase!');
                cart = [];
                localStorage.removeItem('cart');
                updateCartCount();
                renderCart();
            }
        });
    }
}); 