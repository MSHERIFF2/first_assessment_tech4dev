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

// Get all products
productService.getProducts().then((products) => console.log(products));

// Get product by ID
productService.getProductById(1).then((product) => console.log(product));

// Delete product
productService.deleteProduct(1).then(() => console.log("Product deleted"));

