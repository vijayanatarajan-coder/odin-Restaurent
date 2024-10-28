import "../styles/menu.css";

class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export function menuPage() {
  const masalaTea = [
    new Product(
      "Fresh Ginger Tea",
      "Known for its spicy flavor and health benefits like aiding digestion and relieving cold symptoms.",
      2
    ),
    new Product(
      "Green Cardamom pods Tea",
      "known for its refreshing taste and digestive benefits.",
      2.5
    ),
    new Product(
      "Cloves Tea",
      "known for its bold, spicy flavor and natural antibacterial and soothing properties.",
      3
    ),
    new Product(
      "Cinnamon Tea",
      "Renowned for its warming flavor and potential health benefits like boosting metabolism and reducing inflammation.",
      5
    ),
  ];

  const greenTea = [
    new Product(
      "Sencha",
      "Classic tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
      12
    ),
    new Product(
      "Matcha",
      "The most common type of green tea in Japan, known for its bright green color and slightly sweet, grassy flavor.",
      14
    ),
    new Product(
      "Gyokuro",
      "A high-quality Japanese green tea that is shaded before harvesting, resulting in a sweet and delicate flavor.",
      13
    ),
    new Product(
      "Longjing",
      "A popular Chinese green tea known for its flat, smooth leaves and fresh, mellow taste with a hint of sweetness.",
      15
    ),
    new Product(
      "Gunpowder",
      "A Chinese green tea with tightly rolled leaves that resemble small pellets. It has a bold, slightly smoky flavor.",
      16
    ),
    new Product(
      "Bi Luo Chun",
      "A Chinese tea famous for its tightly curled leaves and floral, fruity aroma.",
      14
    ),
  ];

  const content = document.querySelector("#content");
  content.innerHTML = `
    <div class="component">
      <h2>Masala Tea</h2>
      <div class="grid"></div>
      <h2>Green Tea</h2>
      <div class="grid"></div>
    </div>
  `;

  const masalaTeaGrid = document.querySelectorAll(".grid")[0];
  for (let i = 0; i < masalaTea.length; i++) {
    masalaTeaGrid.innerHTML += `
     <div class="item">
      <div class="title">
        <h3 class="name">${masalaTea[i].name}</h3>
        <span class="price">$${masalaTea[i].price.toFixed(2)}</span>
      </div>
        <p class="description">${masalaTea[i].description}</p>
      </div>
    `;
  }

  const greenTeaGrid = document.querySelectorAll(".grid")[1];
  for (let i = 0; i < greenTea.length; i++) {
    greenTeaGrid.innerHTML += `
     <div class="item">
      <div class="title">
        <h3 class="name">${greenTea[i].name}</h3>
        <span class="price">$${greenTea[i].price.toFixed(2)}</span>
      </div>
        <p class="description">${greenTea[i].description}</p>
      </div>
    `;
  }
}
