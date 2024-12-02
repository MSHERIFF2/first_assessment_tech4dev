// Product class
class Product {
  constructor(id, title, category, description, image, price, rating) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.image = image;
    this.price = price;
    this.rating = rating;
  }
}

// ProductService class
export class ProductService {
  // Private method to fetch data from API
  async #fetchData(endpoint) {
    const response = await fetch(`https://fakestoreapi.com/${endpoint}`);
    return await response.json();
  }

  // Method to get all products
  async getProducts() {
    const products = await this.#fetchData("products");
    return products.map(
      (product) =>
        new Product(
          product.id,
          product.title,
          product.category,
          product.description,
          product.image,
          product.price,
          product.rating
        )
    );
  }

  // Method to get product by ID
  async getProductById(id) {
    const product = await this.#fetchData(`products/${id}`);
    return new Product(
      product.id,
      product.title,
      product.category,
      product.description,
      product.image,
      product.price,
      product.rating
    );
  }

  // Method to delete product
  async deleteProduct(id) {
    await this.#fetchData(`products/${id}`, { method: "DELETE" });
  }
}

export const productService = new ProductService();

// Get all products and render them
async function renderProducts() {
    const products = await productService.getProducts();
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const container = document.querySelector(".event-container");
      const card = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");
      const p = document.createElement("p");
      const image = document.createElement("img");
      const view = document.createElement("p");
  
      image.className = "images";
      card.className = "event-card";
  
      h3.innerText = product.title;
      span.innerText = product.category;
      p.innerText = product.description;
      image.src = product.image;
      view.innerText = "View Details";
      view.className = "view";
  
      view.addEventListener("click", () => {
        window.location.href = `singleProductDetails.html?id=${product.id}`;
      });
  
      card.appendChild(image);
      card.appendChild(h3);
      card.appendChild(span);
      card.appendChild(p);
      card.appendChild(view);
      container.appendChild(card);
    }
  }
  
  async function renderSingleProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const product = await productService.getProductById(productId);
    const sdpDiv = document.querySelector(".spd");
    sdpDiv.innerHTML = `
      <h2>${product.title}</h2>
      <p>Category: ${product.category}</p>
      <p>Description: ${product.description}</p>
      <p>Price: ${product.price}</p>
      <img src=${product.image} alt="${product.title}">
    `;
  }
  
  renderProducts();

