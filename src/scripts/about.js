import "../styles/about.css";
export function aboutPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `
      <div class="component">
        <h2>About us</h2>
        <p>
        we believe in the magic of a perfect cup of chai. Rooted in tradition and crafted with love, our signature masala tea blends aromatic spices and rich flavors to create an unforgettable experience. From the heart of India to your cup, we aim to bring warmth and authenticity to every sip. Whether you're a chai enthusiast or new to the brew, our cozy shop is your destination for a taste of true comfort. Join us and sip your way through a world of flavors!.
        </p>
        <div class="grid">
          <div class="item">
            <h3>Contact</h3>
            <span class="list">123-1234</span>
            <span class="list">abcdefg@email.com</span>
          </div>
          <div class="item">
            <h3>Address</h3>
            <span class="list">Anna Nagar</span>
            <span class="list">Tamil Nadu, Chennai,</span>
            <span class="list">India</span>
          </div>
        </div>
        
      </div>
    `;
}
