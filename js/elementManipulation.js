import { productService } from "/workspaces/first_assessment_tech4dev/js/index.js"


/* const container = document.getElementsByClassName('event-container')[0];

const card = document.createElement('div');
card.className = 'event-card';

const div = document.createElement('div');
const h3 = document.createElement('h3');
const span = document.createElement('span');
const p = document.createElement('p');
const view = document.createElement('p');
const image = document.createElement('img');
 */

productService.getProductById(1).then((product) => {
  console.log(product.title)
 /*  h3.innerText = product.title;
  span.innerText = product.category;
  p.innerText = product.description;
  image.src = product.image
  console.log(product);

  card.appendChild(image); // Append the image
  card.appendChild(div);
  card.appendChild(h3);
  card.appendChild(span);
  card.appendChild(p);
  card.appendChild(view);
  container.appendChild(card); */
})
