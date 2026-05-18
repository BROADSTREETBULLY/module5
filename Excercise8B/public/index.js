let allProducts = [];


Promise.all([
  fetch("/api/products").then(r => r.json()).then(r => r.data),
  fetch("/api/products/categories").then(r => r.json()).then(r => r.data)
]).then(function([products, categories]) {

  allProducts = products;

  // Build dropdown from API categories
  const dropdown = document.getElementById('category-dropdown');
  dropdown.innerHTML = `<li><a class="dropdown-item" href="#" data-category="all">All</a></li>`;

  categories.forEach(function(category) {
    const li = document.createElement('li');
    // Capitalize first letter for display
    const label = category.charAt(0).toUpperCase() + category.slice(1);
    li.innerHTML = `<a class="dropdown-item" href="#" data-category="${category}">${label}</a>`;
    dropdown.appendChild(li);
  });

  // Display all products initially
  displayCards(allProducts);

  // Filter on click
  dropdown.addEventListener('click', function(e) {
    if (e.target.classList.contains('dropdown-item')) {
      const selected = e.target.dataset.category;
      const filtered = selected === 'all'
        ? allProducts
        : allProducts.filter(function(p) {
            return p.category === selected;
          });

      document.getElementById('card-list').innerHTML = '';
      displayCards(filtered);
    }
  });
});

function displayCards(products) {
  products.forEach(function(product) {
    addCard(product.title, product.description, product.image, product.price);
  });
}

function addCard(title, description, image, price) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  template.querySelector(".card-title").innerText = title;
  template.querySelector(".card-text").innerText = description;
  template.querySelector(".card-img-top").src = image;
  template.querySelector('.card-footer').innerText = "$" + price;

  document.querySelector("#card-list").appendChild(template);
}