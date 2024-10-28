import odinImage from "../assets/bg.jpg";
import "../styles/home.css";

export function homePage() {
  let divContainer = document.getElementById("content");

  let homeDescription = document.createElement("div");
  homeDescription.classList.add("home-description");

  let image = document.createElement("img");
  image.src = odinImage;
  image.alt = "Odin Image";
  image.width = 1400;
  image.heigth = 200;

  let heading = document.createElement("p");
  heading.textContent = "Welcome to Masala Tea";
  heading.classList.add("heading");

  let content = document.createElement("p");
  content.textContent =
    "where every sip of our authentic masala tea is a journey through exquisite flavors! Indulge in a variety of blends, from classic Masala Chai to zesty Ginger Lemongrass. Join us in our cozy ambiance, perfect for relaxation and connection! Enjoy our daily specials and become part of our vibrant tea-loving community. Visit us and taste the magic today!";
  content.classList.add("content");

  divContainer.appendChild(homeDescription);
  homeDescription.appendChild(image);
  homeDescription.appendChild(heading);
  homeDescription.appendChild(content);
}
