
        const menuButton = document.getElementById('menu-button');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebar-overlay');
        const mainSections = document.querySelectorAll('.main-section');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        const orderItems = document.querySelectorAll('.order-item');
        const backToOrdersButton = document.getElementById('back-to-orders');

        // Sample data for order details
        const orderData = {
            '1001': {
                customer: { name: 'Jane Doe', email: 'jane.doe@example.com' },
                items: [
                    { name: 'Graphic T-shirt', qty: 2, price: 'RWF 15,000' },
                    { name: 'Denim Jacket', qty: 1, price: 'RWF 55,000' }
                ]
            },
            '1002': {
                customer: { name: 'John Smith', email: 'john.smith@example.com' },
                items: [
                    { name: 'Cargo Pants', qty: 1, price: 'RWF 30,000' }
                ]
            },
            '1003': {
                customer: { name: 'Alice Johnson', email: 'alice.j@example.com' },
                items: [
                    { name: 'Graphic T-shirt', qty: 1, price: 'RWF 15,000' },
                    { name: 'Cargo Pants', qty: 1, price: 'RWF 30,000' },
                    { name: 'Denim Jacket', qty: 1, price: 'RWF 55,000' }
                ]
            }
        };

        function toggleSidebar() {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('visible');
        }

        // Function to show a specific section and update the active link
        function showSection(sectionId) {
            mainSections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });

            // Update active link styling
            sidebarLinks.forEach(link => {
                const linkSection = link.getAttribute('data-section');
                if (linkSection === sectionId || (sectionId === 'order-details' && linkSection === 'orders')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        // Function to populate and show order details
        function showOrderDetails(orderId) {
            const order = orderData[orderId];
            if (!order) {
                console.error('Order not found:', orderId);
                return;
            }

            // Populate customer details
            document.getElementById('customer-name').textContent = `Name: ${order.customer.name}`;
            document.getElementById('customer-email').textContent = `Email: ${order.customer.email}`;

            // Populate order items table
            const itemsTableBody = document.getElementById('order-items-table');
            itemsTableBody.innerHTML = ''; // Clear previous items
            order.items.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.qty}</td>
                    <td>${item.price}</td>
                `;
                itemsTableBody.appendChild(row);
            });

            showSection('order-details');
        }

        // Add event listeners
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const sectionId = link.getAttribute('data-section');
                showSection(sectionId);
                if (window.innerWidth < 768) {
                    toggleSidebar();
                }
            });
        });

        orderItems.forEach(item => {
            item.addEventListener('click', () => {
                const orderId = item.getAttribute('data-order-id');
                showOrderDetails(orderId);
            });
        });

        backToOrdersButton.addEventListener('click', () => {
            showSection('orders');
        });
        
        menuButton.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);

        // Initial setup: show the dashboard section by default
        showSection('dashboard');
