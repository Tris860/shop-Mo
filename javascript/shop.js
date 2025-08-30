
    // Sample product data for clothing
    const products = [
        {
            id: '1',
            name: 'Vintage Denim Jacket',
            description: 'A classic fit denim jacket with distressed details. Perfect for a casual, timeless look.',
            price: 75.00,
            category: 'Outerwear',
            material: 'Denim',
            images: [
                'https://placehold.co/400x500/d1d5db/374151?text=Denim+Jacket',
                'https://placehold.co/400x500/9ca3af/1f2937?text=Jacket+Back+View',
                'https://placehold.co/400x500/6b7280/f3f4f6?text=Jacket+Details'
            ]
        },
        {
            id: '2',
            name: 'Striped Cotton T-Shirt',
            description: 'A comfortable, breathable cotton t-shirt with horizontal stripes. A wardrobe staple.',
            price: 25.00,
            category: 'Tops',
            material: 'Cotton',
            images: [
                'https://placehold.co/400x500/9ca3af/1f2937?text=Striped+T-shirt',
                'https://placehold.co/400x500/d1d5db/374151?text=T-shirt+Close-up',
                'https://placehold.co/400x500/6b7280/f3f4f6?text=T-shirt+Room+View'
            ]
        },
        {
            id: '3',
            name: 'Floral Sundress',
            description: 'A light and airy sundress with a vibrant floral pattern. Ideal for warm weather.',
            price: 55.00,
            category: 'Dresses',
            material: 'Polyester',
            images: [
                'https://placehold.co/400x500/6b7280/f3f4f6?text=Floral+Sundress',
                'https://placehold.co/400x500/d1d5db/374151?text=Dress+Back'
            ]
        },
        {
            id: '4',
            name: 'Relaxed Fit Linen Pants',
            description: 'Casual linen pants that are both stylish and comfortable. A must-have for summer.',
            price: 65.00,
            category: 'Bottoms',
            material: 'Linen',
            images: [
                'https://placehold.co/400x500/f3f4f6/111827?text=Linen+Pants'
            ]
        },
        {
            id: '5',
            name: 'Classic Black Sweater',
            description: 'A soft, crew-neck sweater made from a wool blend. A versatile addition to any outfit.',
            price: 89.00,
            category: 'Tops',
            material: 'Wool',
            images: [
                'https://placehold.co/400x500/d1d5db/374151?text=Black+Sweater',
                'https://placehold.co/400x500/f3f4f6/111827?text=Sweater+Texture'
            ]
        },
        {
            id: '6',
            name: 'High-Waisted Skinny Jeans',
            description: 'Figure-flattering skinny jeans with a high-waisted cut and a light wash.',
            price: 68.00,
            category: 'Bottoms',
            material: 'Denim',
            images: [
                'https://placehold.co/400x500/9ca3af/1f2937?text=Skinny+Jeans'
            ]
        },
        {
            id: '7',
            name: 'Sleek Leather Belt',
            description: 'A simple, elegant leather belt with a minimalist buckle. Perfect for both casual and formal wear.',
            price: 45.00,
            category: 'Accessories',
            material: 'Leather',
            images: [
                'https://placehold.co/400x500/6b7280/f3f4f6?text=Leather+Belt',
                'https://placehold.co/400x500/1f2937/f9fafb?text=Belt+Buckle'
            ]
        },
        {
            id: '8',
            name: 'Cotton Blend Hoodie',
            description: 'A super soft and warm hoodie. Great for layering on cooler days.',
            price: 72.00,
            category: 'Outerwear',
            material: 'Cotton',
            images: [
                'https://placehold.co/400x500/f3f4f6/111827?text=Gray+Hoodie'
            ]
        }
    ];

    // Get DOM elements
    const productGrid = document.getElementById('productGrid');
    const searchInput = document.getElementById('searchInput');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const filterOpenBtn = document.getElementById('filterOpenBtn');
    const filterHideBtn = document.getElementById('filterHideBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarFilter = document.getElementById('sidebarFilter');
    const desktopFilterPanel = document.getElementById('desktopFilterPanel');
    const productModal = document.getElementById('productModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalMainImage = document.getElementById('modalMainImage');
    const modalThumbnails = document.getElementById('modalThumbnails');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductDescription = document.getElementById('modalProductDescription');
    const modalProductPrice = document.getElementById('modalProductPrice');
    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const cartModalCloseBtn = document.getElementById('cartModalCloseBtn');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotalElement = document.getElementById('cartTotal');
    const messageBox = document.getElementById('messageBox');
    const proceedToCheckoutBtn = document.getElementById('proceedToCheckoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const checkoutModalCloseBtn = document.getElementById('checkoutModalCloseBtn');
    const checkoutContent = document.getElementById('checkoutContent');
    const stepCircleDetails = document.getElementById('stepCircleDetails');
    const stepCirclePayment = document.getElementById('stepCirclePayment');
    const stepCircleConfirmation = document.getElementById('stepCircleConfirmation');

    let currentFilters = {
        searchText: '',
        category: [],
        material: [],
        price: 'All'
    };
    let cart = [];
    let checkoutData = {
        name: '',
        email: '',
        phone: '',
        address: '',
        fulfillment: 'delivery'
    };
    let currentCheckoutStep = 'details';

    // --- Helper Functions ---

    // Formats a number as currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(amount);
    };

    // Creates and appends a single product card to the grid
    const createProductCard = (product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/400x500?text=Image+Unavailable';">
            <div class="product-card-body">
                <h4 style="font-size: 1.25rem; font-weight: 600; margin: 0 0 0.5rem;">${product.name}</h4>
                <p style="font-size: 1.125rem; color: var(--color-gray-700); margin: 0;">${formatCurrency(product.price)}</p>
            </div>
        `;
        card.addEventListener('click', () => openModal(product));
        productGrid.appendChild(card);
    };

    // Renders all products based on the current filters
    const renderProducts = () => {
        productGrid.innerHTML = ''; // Clear existing products
        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(currentFilters.searchText.toLowerCase());
            const matchesCategory = currentFilters.category.length === 0 || currentFilters.category.includes(product.category);
            const matchesMaterial = currentFilters.material.length === 0 || currentFilters.material.includes(product.material);
            const matchesPrice = filterByPrice(product.price, currentFilters.price);

            return matchesSearch && matchesCategory && matchesMaterial && matchesPrice;
        });

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = `<div class="no-results">No products found matching your criteria.</div>`;
        } else {
            filteredProducts.forEach(createProductCard);
        }
    };

    // Filters products by price range
    const filterByPrice = (price, range) => {
        switch(range) {
            case 'All':
                return true;
            case 'under-50':
                return price < 50;
            case '50-100':
                return price >= 50 && price <= 100;
            case '100-200':
                return price > 100 && price <= 200;
            case 'over-200':
                return price > 200;
            default:
                return true;
        }
    };

    // Renders cart items
    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--color-gray-500);">Your cart is empty.</p>';
            proceedToCheckoutBtn.disabled = true;
            proceedToCheckoutBtn.style.opacity = '0.5';
            proceedToCheckoutBtn.style.cursor = 'not-allowed';
        } else {
            cart.forEach(item => {
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-modal-item';
                cartItemElement.innerHTML = `
                    <img src="${item.images[0]}" alt="${item.name}" onerror="this.onerror=null;this.src='https://placehold.co/60x60?text=Image+Unavailable';">
                    <div class="cart-modal-item-details">
                        <h4>${item.name}</h4>
                        <p>Quantity: ${item.quantity}</p>
                        <p>Price: ${formatCurrency(item.price)}</p>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItemElement);
                total += item.price * item.quantity;
            });
            proceedToCheckoutBtn.disabled = false;
            proceedToCheckoutBtn.style.opacity = '1';
            proceedToCheckoutBtn.style.cursor = 'pointer';
        }
        cartTotalElement.textContent = `Total: ${formatCurrency(total)}`;
    };
    
    // Creates filter groups dynamically
    const createFilterPanels = () => {
        const filters = {
            category: [...new Set(products.map(p => p.category))],
            material: [...new Set(products.map(p => p.material))],
            price: ['under-50', '50-100', '100-200', 'over-200']
        };

        const priceLabels = {
            'under-50': 'Under $50',
            '50-100': '$50 - $100',
            '100-200': '$100 - $200',
            'over-200': 'Over $200'
        };

        // Render filter groups in both sidebar and desktop panel
        [sidebarFilter, desktopFilterPanel].forEach(panel => {
            if (!panel) return;
            const currentContent = panel.innerHTML;
            if (currentContent.trim() === '' || currentContent.includes('filter-group')) return; // Prevents re-rendering

            // Category filter
            const categoryGroup = document.createElement('div');
            categoryGroup.className = 'filter-group';
            categoryGroup.innerHTML = `
                <details open>
                    <summary>Category</summary>
                    <div class="filter-options" id="categoryOptions">
                        ${filters.category.map(c => `
                            <label>
                                <input type="checkbox" name="category" value="${c}">
                                ${c}
                            </label>
                        `).join('')}
                    </div>
                </details>
            `;
            panel.appendChild(categoryGroup);

            // Material filter
            const materialGroup = document.createElement('div');
            materialGroup.className = 'filter-group';
            materialGroup.innerHTML = `
                <details open>
                    <summary>Material</summary>
                    <div class="filter-options" id="materialOptions">
                        ${filters.material.map(m => `
                            <label>
                                <input type="checkbox" name="material" value="${m}">
                                ${m}
                            </label>
                        `).join('')}
                    </div>
                </details>
            `;
            panel.appendChild(materialGroup);

            // Price filter
            const priceGroup = document.createElement('div');
            priceGroup.className = 'filter-group';
            priceGroup.innerHTML = `
                <details open>
                    <summary>Price</summary>
                    <div class="filter-options" id="priceOptions">
                        <label>
                            <input type="radio" name="price" value="All" checked>
                            All
                        </label>
                        ${filters.price.map(p => `
                            <label>
                                <input type="radio" name="price" value="${p}">
                                ${priceLabels[p]}
                            </label>
                        `).join('')}
                    </div>
                </details>
            `;
            panel.appendChild(priceGroup);
        });
    };

    // Add event listeners for filter checkboxes and radio buttons
    const setupFilterListeners = () => {
        document.querySelectorAll('.filter-group input').forEach(input => {
            input.addEventListener('change', (e) => {
                const name = e.target.name;
                const value = e.target.value;

                if (name === 'price') {
                    currentFilters.price = value;
                } else {
                    if (e.target.checked) {
                        currentFilters[name].push(value);
                    } else {
                        currentFilters[name] = currentFilters[name].filter(item => item !== value);
                    }
                }
                renderProducts();
            });
        });
    };
    
    // --- Checkout Logic ---
    const renderCheckoutStep = (step) => {
        currentCheckoutStep = step;
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        stepCircleDetails.classList.remove('active', 'completed');
        stepCirclePayment.classList.remove('active', 'completed');
        stepCircleConfirmation.classList.remove('active', 'completed');

        if (step === 'details') {
            stepCircleDetails.classList.add('active');
            
            // Build the dynamic form content
            const fulfillmentForm = `
                <h3 style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--color-gray-700);">How would you like to receive your order?</h3>
                <div class="delivery-options" id="fulfillmentOptions">
                    <label class="delivery-option ${checkoutData.fulfillment === 'delivery' ? 'selected' : ''}">
                        <input type="radio" name="fulfillment" value="delivery" ${checkoutData.fulfillment === 'delivery' ? 'checked' : ''}>
                        <div class="option-label">
                            <i class="fa-solid fa-truck"></i>
                            <p>Delivery</p>
                        </div>
                    </label>
                    <label class="delivery-option ${checkoutData.fulfillment === 'pickup' ? 'selected' : ''}">
                        <input type="radio" name="fulfillment" value="pickup" ${checkoutData.fulfillment === 'pickup' ? 'checked' : ''}>
                        <div class="option-label">
                            <i class="fa-solid fa-store"></i>
                            <p>In-Store Pickup</p>
                        </div>
                    </label>
                </div>
                <form id="detailsForm">
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" name="name" class="input-text" required value="${checkoutData.name}">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" class="input-text" required value="${checkoutData.email}">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" class="input-text" value="${checkoutData.phone}">
                    </div>
                    <div class="form-group" id="addressGroup" style="display: ${checkoutData.fulfillment === 'delivery' ? 'block' : 'none'};">
                        <label for="address">Shipping Address</label>
                        <textarea id="address" name="address" class="input-text" rows="3">${checkoutData.address}</textarea>
                    </div>
                    <div class="button-group">
                        <button type="button" class="button-secondary" id="backToCartBtn">Back to Cart</button>
                        <button type="submit" class="button-primary">Continue</button>
                    </div>
                </form>
            `;
            
            checkoutContent.innerHTML = fulfillmentForm;

            // Add listeners for fulfillment options
            const fulfillmentOptions = document.getElementById('fulfillmentOptions');
            const addressGroup = document.getElementById('addressGroup');
            
            fulfillmentOptions.addEventListener('change', (event) => {
                checkoutData.fulfillment = event.target.value;
                document.querySelectorAll('.delivery-option').forEach(el => el.classList.remove('selected'));
                event.target.closest('.delivery-option').classList.add('selected');

                if (checkoutData.fulfillment === 'delivery') {
                    addressGroup.style.display = 'block';
                    document.getElementById('address').required = true;
                } else {
                    addressGroup.style.display = 'none';
                    document.getElementById('address').required = false;
                }
            });

            // Add other form listeners
            document.getElementById('detailsForm').addEventListener('submit', handleDetailsSubmit);
            document.getElementById('backToCartBtn').addEventListener('click', () => {
                checkoutModal.classList.remove('is-open');
                cartModal.classList.add('is-open');
            });
        } else if (step === 'payment') {
            stepCircleDetails.classList.add('completed');
            stepCirclePayment.classList.add('active');

            const orderType = checkoutData.fulfillment === 'delivery' ? 'Delivery' : 'In-Store Pickup';
            const locationDetail = checkoutData.fulfillment === 'delivery' ? `<strong>Address:</strong><br>${checkoutData.address}` : 'Pickup at our store location.';

            checkoutContent.innerHTML = `
                <div class="checkout-tab-content">
                    <h3 style="font-size: 1.25rem; font-weight: 700; text-align: center; margin-bottom: 1rem;">Order Summary</h3>
                    <div class="checkout-summary">
                        <p><strong>Total:</strong> ${formatCurrency(total)}</p>
                        <p style="margin-top: 1rem;"><strong>Order Type:</strong> ${orderType}</p>
                        <p style="margin-top: 0.5rem;">${locationDetail}</p>
                    </div>
                </div>
                <div class="button-group">
                    <button type="button" class="button-secondary" id="backToDetailsBtn">Back</button>
                    <button type="button" class="button-primary" id="confirmPaymentBtn">
                        Pay ${formatCurrency(total)}
                    </button>
                </div>
            `;
            document.getElementById('backToDetailsBtn').addEventListener('click', () => renderCheckoutStep('details'));
            document.getElementById('confirmPaymentBtn').addEventListener('click', handlePaymentConfirmation);

        } else if (step === 'confirmation') {
            stepCircleDetails.classList.add('completed');
            stepCirclePayment.classList.add('completed');
            stepCircleConfirmation.classList.add('active');
            checkoutContent.innerHTML = `
                <div class="confirmation-message">
                    <div style="font-size: 3rem; color: var(--color-green);">✔</div>
                    <h3>Order Confirmed!</h3>
                    <p>Thank you for your purchase.</p>
                    <p style="margin-top: 0.5rem; font-size: 0.875rem;">A confirmation email has been sent to ${checkoutData.email}.</p>
                    <button type="button" class="button-primary" style="margin-top: 2rem;" id="continueShoppingBtn">Continue Shopping</button>
                </div>
            `;
            document.getElementById('continueShoppingBtn').addEventListener('click', () => {
                checkoutModal.classList.remove('is-open');
                cart = []; // Empty the cart
                renderCart(); // Update the UI
            });
        }
    };
    
    const handleDetailsSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        checkoutData.name = form.elements['name'].value;
        checkoutData.email = form.elements['email'].value;
        checkoutData.phone = form.elements['phone'].value;
        if (checkoutData.fulfillment === 'delivery') {
            checkoutData.address = form.elements['address'].value;
        } else {
            checkoutData.address = ''; // Clear address for pickup
        }
        renderCheckoutStep('payment');
    };
    
    const handlePaymentConfirmation = () => {
        const payBtn = document.getElementById('confirmPaymentBtn');
        const originalText = payBtn.innerHTML;
        
        // Show loading spinner and disable button
        payBtn.innerHTML = '<span class="loading-spinner"></span>';
        payBtn.disabled = true;

        setTimeout(() => {
            // Restore button and proceed to confirmation
            payBtn.innerHTML = originalText;
            payBtn.disabled = false;
            renderCheckoutStep('confirmation');
        }, 2000); // Simulate a 2-second payment processing time
    };

    // --- Event Listeners ---

    // Search input listener
    searchInput.addEventListener('input', (e) => {
        currentFilters.searchText = e.target.value;
        renderProducts();
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Mobile filter sidebar toggle (open)
    filterOpenBtn.addEventListener('click', () => {
        sidebarFilter.classList.add('is-open');
        sidebarOverlay.style.display = 'block';
        filterHideBtn.style.display = 'block';
    });

    // Mobile filter sidebar toggle (hide)
    filterHideBtn.addEventListener('click', () => {
        sidebarFilter.classList.remove('is-open');
        sidebarOverlay.style.display = 'none';
        filterHideBtn.style.display = 'none';
    });

    // Close mobile filter sidebar when overlay is clicked
    sidebarOverlay.addEventListener('click', () => {
        sidebarFilter.classList.remove('is-open');
        sidebarOverlay.style.display = 'none';
        filterHideBtn.style.display = 'none';
    });
    
    // Close product modal when close button is clicked
    modalCloseBtn.addEventListener('click', () => {
        productModal.classList.remove('is-open');
    });

    // Close cart modal when close button is clicked
    cartModalCloseBtn.addEventListener('click', () => {
        cartModal.classList.remove('is-open');
    });
    
    // Close checkout modal when close button is clicked
    checkoutModalCloseBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('is-open');
    });

    // Open cart modal when cart icon is clicked
    cartIcon.addEventListener('click', () => {
        renderCart();
        cartModal.classList.add('is-open');
    });

    // Close any modal when clicking outside of the content
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('is-open');
        }
        if (e.target === cartModal) {
            cartModal.classList.remove('is-open');
        }
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('is-open');
        }
        if (e.target === messageBox) {
            messageBox.classList.remove('show');
        }
    });

    // 'Add to Cart' button functionality
    modalAddToCartBtn.addEventListener('click', () => {
        const productId = modalAddToCartBtn.dataset.productId;
        const product = products.find(p => p.id === productId);

        if (product) {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            showMessage(messageBox, `${product.name} added to cart!`);
            productModal.classList.remove('is-open');
        }
    });
    
    // 'Proceed to Checkout' button from cart modal
    proceedToCheckoutBtn.addEventListener('click', () => {
        cartModal.classList.remove('is-open');
        checkoutModal.classList.add('is-open');
        renderCheckoutStep('details');
    });

    // Function to show a temporary message box
    const showMessage = (element, message) => {
        element.textContent = message;
        element.classList.add('show');
        setTimeout(() => {
            element.classList.remove('show');
        }, 3000); // Hide after 3 seconds
    };

    // --- Modal Logic ---
    const openModal = (product) => {
        // Populate modal with product details
        modalProductName.textContent = product.name;
        modalProductDescription.textContent = product.description;
        modalProductPrice.textContent = formatCurrency(product.price);
        modalAddToCartBtn.dataset.productId = product.id;
        
        // Set the main image
        modalMainImage.src = product.images[0];
        modalMainImage.alt = product.name;

        // Clear and populate thumbnails
        modalThumbnails.innerHTML = '';
        if (product.images.length > 1) {
            product.images.forEach((imgSrc, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = imgSrc;
                thumbnail.alt = `Thumbnail ${index + 1}`;
                thumbnail.className = 'modal-thumbnail';
                if (index === 0) {
                    thumbnail.classList.add('active');
                }
                thumbnail.addEventListener('click', () => {
                    modalMainImage.src = imgSrc;
                    // Update active class
                    document.querySelectorAll('.modal-thumbnail').forEach(thumb => thumb.classList.remove('active'));
                    thumbnail.classList.add('active');
                });
                modalThumbnails.appendChild(thumbnail);
            });
        }
        
        // Show the modal
        productModal.classList.add('is-open');
    };

    // Initial setup
    document.addEventListener('DOMContentLoaded', () => {
        createFilterPanels();
        setupFilterListeners();
        renderProducts();
    });

