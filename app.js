fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const menuContainer = document.querySelector('.menu-container');
        const categoryButtons = document.querySelectorAll('.navbar button');

        // Function to display menu items
        function displayMenuItems(items) {
            const menuContainer = document.querySelector('.menu-container');
            menuContainer.innerHTML = '';

            items.forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');

                if (item.id % 2 === 0) {
                    menuItem.classList.add('cift');
                } else {
                    menuItem.classList.add('tek');
                }

                const itemHeader = document.createElement('div');
                itemHeader.classList.add('item-header');

                const itemName = document.createElement('h3');
                itemName.classList.add('item-name');
                itemName.innerText = item.name;

                const category = document.createElement('p');
                category.classList.add('category-name');
                category.innerText = item.category;

                itemHeader.appendChild(itemName);
                itemHeader.appendChild(category);

                const priceContainer = document.createElement('div');
                priceContainer.classList.add('price-container');

                const size1 = document.createElement('div');
                size1.classList.add('one');

                const size1Name = document.createElement('p');
                size1Name.classList.add('item-size');
                size1Name.innerText = item.size1;

                const size1Price = document.createElement('span');
                size1Price.classList.add('item-price');
                size1Price.innerText = item.price1;

                size1.appendChild(size1Name);
                size1.appendChild(size1Price);

                const size2 = document.createElement('div');
                size2.classList.add('two');

                const size2Name = document.createElement('p');
                size2Name.classList.add('item-size');
                size2Name.innerText = item.size2;

                const size2Price = document.createElement('span');
                size2Price.classList.add('item-price');
                size2Price.innerText = item.price2;

                size2.appendChild(size2Name);
                size2.appendChild(size2Price);

                const size3 = document.createElement('div');
                size3.classList.add('three');

                const size3Name = document.createElement('p');
                size3Name.classList.add('item-size');
                size3Name.innerText = item.size3;

                const size3Price = document.createElement('span');
                size3Price.classList.add('item-price');
                size3Price.innerText = item.price3;

                size3.appendChild(size3Name);
                size3.appendChild(size3Price);

                priceContainer.appendChild(size1);
                priceContainer.appendChild(size2);
                priceContainer.appendChild(size3);

                menuItem.appendChild(itemHeader);
                menuItem.appendChild(priceContainer);

                menuContainer.appendChild(menuItem);
            });
        }


        displayMenuItems(data);

        // Filter menu items based on category
        const filterMenuItems = (category) => {
            if (category === 'Tümü') {
                displayMenuItems(data);
            } else {
                const filteredItems = data.filter(item => item.category === category);
                displayMenuItems(filteredItems);
            }
        };

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                filterMenuItems(category);
            });
        });

    });
