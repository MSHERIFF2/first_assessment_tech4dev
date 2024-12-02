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
  renderSingleProduct()