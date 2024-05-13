const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `

 <div class="nav">
     <img src="Pic/logo.jpg" class="brand-logo" alt="logo">
     <div class="nav-items">
         <div class="search">
             <input type="text" class="search-box" placeholder="what are you looking for?">
             <button class="search-btn">search</button>
         </div>
         <a href="LogIn.html"><img src="Pic/R.jpeg" alt="log in"></a>
         <a href="#"><img src="Pic/OIP.jpeg" alt=""></a>
     </div>
 </div>
 <ul class="links-container">
 <li class="link-item"><a href="index.html" class="link">home</a></li>
 <li class="link-item"><a href="index.html#about" class="link">About us</a></li>
 <li class="link-item"><a href="index.html#container" class="link">Concat us </a></li>
 <li class="link-item"><a href="toys.html" class="link">Toys</a></li>
    <li class="link-item"><a href="bag.html" class="link">Bag</a></li>
    <li class="link-item"><a href="things.html" class="link">thinkgs</a></li>
    <li class="link-item"><a href="embroidery.html" class="link">Embroidery</a></li>
 </ul>    `;
}
createNav();
