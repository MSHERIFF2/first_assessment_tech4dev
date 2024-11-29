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
        return products.map((product) => new Product(product.id, product.title, product.category, product.description, product.image, product.price, product.rating));
    }

    // Method to get product by ID
    async getProductById(id) {
        const product = await this.#fetchData(`products/${id}`);
        return new Product(product.id, product.title, product.category, product.description, product.image, product.price, product.rating);
    }

    // Method to delete product
    async deleteProduct(id) {
        await this.#fetchData(`products/${id}`, { method: "DELETE" });
    }
}

export const productService = new ProductService()
const productServiceLength = await productService?.getProducts()
for (let i = 1; i < productServiceLength.length; i++) {
    productService.getProductById(i).then((products) => {
        const container = document.querySelector('.event-container');
        const card = document.createElement('div');
        const h3 = document.createElement('h3');
        const span = document.createElement('span');
        const p = document.createElement('p');
        const view = document.createElement('p');
        const image = document.createElement('img');
// given nodeElement className
        image.className = 'images'
        card.className = 'event-card';
// change nodeElement value through Attributes
        h3.innerText = products.title;
        span.innerText = products.category;
        p.innerText = products.description;
        image.src = products.image
        view.innerText = "view Details"
        view.className = "view"

// Appending nodeElement
        card.appendChild(image); // Append the image
        card.appendChild(h3);
        card.appendChild(span);
        card.appendChild(p);
        card.appendChild(view);
        container.appendChild(card);
    })
}
