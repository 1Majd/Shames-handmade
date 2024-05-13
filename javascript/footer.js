
const createFooter = () => {
    let Footer = document.querySelector('.footer');

    Footer.innerHTML = `
    
    <div class="footer-content">
        <img src="Pic/logo.jpg" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li><a href="toys.html" class="footer-link">Toys</a></li>
                <li><a href="bag.html" class="footer-link">Bag</a></li>
                <li><a href="things.html" class="footer-link">Flower</a></li>
                <li><a href="things.html" class="footer-link">set</a></li>
                <li><a href="things.html" class="footer-link">Blanket</a></li>
                <li><a href="embroidery.html" class="footer-link"> mini bag Embroidery</a></li>
                <li><a href="embroidery.html" class="footer-link">bag Embroidery</a></li>
                <li><a href="embroidery.html" class="footer-link">portrokle</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Welcome to Shames handmade, where every stitch tells a story. Founded in 2022, we're
    passionate about crafting handmade bags that blend timeless elegance with contemporary
    flair.
    At Shames handmade, we honor tradition while embracing innovation. Each bag in our
    collection is meticulously crafted by skilled artisans, ensuring unrivaled quality and
    attention to detail. Join us on our journey as we celebrate the artistry of handmade craftsmanship and the beauty
    of individuality.
    </p>
    <p class="info">emails - help@clothing.com</p>
    <p class="info">telephone - +961 76955208</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">WhatsApp</a>
        </div>
    </div>
    <!-- <p class="footer-credit">Clothing, Best apparels online store</p> -->




    `;
}
createFooter();
