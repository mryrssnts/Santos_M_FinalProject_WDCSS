function showDemoAlert() {
    alert("Services and Support links are for demo purposes only. Please visit the official McDonald's website for actual services.");
  }

  const products = [
    {id: 1, name: 'Big Mac',category: 'burgers',
    description:'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun',
    image:'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5f388d151803545.6312365cb1c3a.jpg',
    },

    {id: 2, name: 'Quarter Pounder',
      category: 'burgers',
      description:'Fresh beef burger with cheese, onions, pickles, ketchup, and mustard',
      image:"https://staticc.sportskeeda.com/editor/2023/06/c1362-16872934957951-1920.jpg",
    },

    {id: 3, name: 'McChicken',
      category: 'burgers',
      description: 'Crispy chicken fillet with lettuce and mayo',
      image:'https://img.freepik.com/premium-photo/big-juicy-chicken-burger-sandwich-orange-background-high-realitiy-fast-food-concept_175994-27360.jpg',
    },

    {id: 4, name: 'Cheeseburger',
      category: 'burgers',
      description: 'Classic beef patty with cheese, onions, pickles, ketchup, and mustard',
      image: "https://www.allrecipes.com/thmb/Em0_7fI3rg1TAQD5OUxHO30Xwgk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-mcdonalds-cheeseburger-8d25fa4215e844788d85c5f4519235eb.jpg",
    },

    {
      id: 5, name: 'World Famous Fries',
      category: 'sides',
      description: 'Golden, crispy fries made from premium potatoes',
      image: "https://www.eatthis.com/wp-content/uploads/sites/4/2017/12/mcdonalds-french-fries.jpg?quality=82&strip=1&w=800",
    },

    {id: 6, name: 'Chicken McNuggets',
      category: 'sides',
      description: 'Tender, juicy chicken in a crispy coating',
      image: 'https://www.the-sun.com/wp-content/uploads/sites/6/2021/08/NINTCHDBPICT000486990216-1.jpg?w=1500',
    },

    {
      id: 7, name: 'Hash Browns',
      category: 'sides',
      description: 'Crispy golden hash browns',
      image:"https://www.mashed.com/img/gallery/this-is-why-mcdonalds-hash-browns-are-so-delicious/l-intro-1612814942.jpg",
    },

    {
      id: 8, name: 'Apple Pie',
      category: 'sides',
      description: 'Warm apple pie with cinnamon',
      image:"https://imlovinit.mcdonalds.com.my/storage/articles/October2017/PY9PUUNUFnKj0cCsePil.jpg",
    },

    {
      id: 9, name: 'McFloat',
      category: 'drinks',
      description: 'Served with Ice cream and classic Coca-Cola soft drink',
      image:'https://pinoycupidgifts.com/wp-content/uploads/2022/08/Macdo-Coke-McFloat-600x450.jpg',
    },

    {
      id: 10, name: 'McCafé Coffee',
      category: 'drinks',
      description: 'Premium coffee made from sustainably sourced beans',
      image:'https://i.pinimg.com/originals/a3/60/30/a360301247341c777329b2ddacd3ab59.jpg',
    },

    {
      id: 11, name: 'Orange Juice',
      category: 'drinks',
      description: 'Fresh orange juice',
      image:'https://tse1.mm.bing.net/th/id/OIP.Lf6vGVg7CVmKnIzRnwmaqwHaHa?r=0&w=500&h=500&rs=1&pid=ImgDetMain&o=7&rm=3',
    },

    {
      id: 12, name: 'Coke',
      category: 'drinks',
      description: 'Refreshing Coca-Cola soft drink',
      image:'https://tse2.mm.bing.net/th/id/OIP.jesjOz4FwiESJEcYBtSUPQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    },

    {
      id: 13, name: 'McFlurry',
      category: 'desserts',
      description: 'Creamy soft serve with our signature toppings',
      image:"https://i.pinimg.com/originals/4e/c0/ff/4ec0ffd1080eedd01e0828e8241755db.jpg",
    },

    {
      id: 14, name: 'Vanilla Cone',
      category: 'desserts',
      description: 'Classic vanilla soft serve cone',
      image:"https://i.pinimg.com/736x/78/bd/23/78bd23f6a89dae30d7d20738b56867f8.jpg",
    },

    {
      id: 15, name: 'Hot Fudge Sundae',
      category: 'desserts',
      description: 'Rich chocolate fudge sundae with whipped cream and a cherry on top',
      image:"https://mcdonaldsmenu.ph/wp-content/uploads/2024/04/Hot-Fudge-Sundae.webp",
    },

    {
      id: 16, name: 'Hot Caramel Sundae',
      category: 'desserts',
      description: 'Vanilla ice cream with caramel sauce',
      image:"https://mcdomenu.com.ph/wp-content/uploads/2024/03/1628437633_web_alacarte_pG8ZcoOV.webp",
    },
  ];

  function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    if (productsToShow.length === 0) {
      productsGrid.innerHTML =
        '<p class="text-center fs-4">No products found.</p>';
      return;
    }

    productsToShow.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.className = 'col-sm-6 col-md-4 col-lg-3 d-flex';

      productCard.innerHTML = `
        <div class="product-card w-100">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-content">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        </div>
      `;

      productsGrid.appendChild(productCard);
      const addToCartBtn = productCard.querySelector('.add-to-cart');
      addToCartBtn.addEventListener('click', () => {
        alert('This is just a demo website.');
      });
    });
  }

  function filterProducts(category) {
    document.querySelectorAll('.category-btn').forEach((btn) => {
      btn.classList.remove('active');
    });

    event.target.classList.add('active');

    if (category === 'all') {
      displayProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      displayProducts(filtered);
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
  });