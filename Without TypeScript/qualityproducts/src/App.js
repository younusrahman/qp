import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScriptTag from 'react-script-tag';



function App() {
  const menu = document.querySelector('.menu');
  menu.
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;
menuSection.addEventListener('click', (e) => {
   if (!menu.classList.contains('active')) {
      return;
   }
   if (e.target.closest('.menu-item-has-children')) {
      const hasChildren = e.target.closest('.menu-item-has-children');
      showSubMenu(hasChildren);
   }
});
menuArrow.addEventListener('click', () => {
   hideSubMenu();
});
menuTrigger.addEventListener('click', () => {
   toggleMenu();
});
menuClosed.addEventListener('click', () => {
   toggleMenu();
});
menuOverlay.addEventListener('click', () => {
   toggleMenu();
});
function toggleMenu() {
   menu.classList.toggle('active');
   menuOverlay.classList.toggle('active');
}
function showSubMenu(hasChildren) {
   subMenu = hasChildren.querySelector('.menu-subs');
   subMenu.classList.add('active');
   subMenu.style.animation = 'slideLeft 0.5s ease forwards';
   const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
   menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
   menu.querySelector('.menu-mobile-header').classList.add('active');
}
function hideSubMenu() {
   subMenu.style.animation = 'slideRight 0.5s ease forwards';
   setTimeout(() => {
      subMenu.classList.remove('active');
   }, 300);
   menu.querySelector('.menu-mobile-title').innerHTML = '';
   menu.querySelector('.menu-mobile-header').classList.remove('active');
}

  

  return (
    <div className="App">
<header class="header">
        <div class="container">
          <div class="wrapper">
            <div class="header-item-left">
              <h1><a href="#" class="brand">Logo</a></h1>
            </div>
            <div class="header-item-center">
              <div class="overlay"></div>
              <nav class="menu">
                <div class="menu-mobile-header">
                  <button type="button" class="menu-mobile-arrow"><i class="ion ion-ios-arrow-back"></i></button>
                  <div class="menu-mobile-title"></div>
                  <button type="button" class="menu-mobile-close"><i class="ion ion-ios-close"></i></button>
                </div>
                <ul class="menu-section">
                  <li><a href="#">Home</a></li>
                  <li class="menu-item-has-children">
                    <a href="#">What's New <i class="ion ion-ios-arrow-down"></i></a>
                    <div class="menu-subs menu-mega menu-column-4">
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="./asset/image-1.jpg" class="responsive" alt="New Product"/>
                          <h4 class="title">Product 1</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="./asset/image-2.jpg" class="responsive" alt="New Product"/>
                          <h4 class="title">Product 2</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="./asset/image-3.jpg" class="responsive" alt="New Product"/>
                          <h4 class="title">Product 3</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="./asset/image-4.jpg" class="responsive" alt="New Product"/>
                          <h4 class="title">Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Category <i class="ion ion-ios-arrow-down"></i></a>
                    <div class="menu-subs menu-mega menu-column-4">
                      <div class="list-item">
                        <h4 class="title">Men's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                        <h4 class="title">Kid's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Women's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                        <h4 class="title">Health & Beauty</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <h4 class="title">Home & Lifestyle</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div class="list-item">
                        <img src="./asset/image-5.jpg" class="responsive" alt="Shop Product"/>
                      </div>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Articles <i class="ion ion-ios-arrow-down"></i></a>
                    <div class="menu-subs menu-column-1">
                      <ul>
                        <li><a href="#">Article One</a></li>
                        <li><a href="#">Article Two</a></li>
                        <li><a href="#">Article Three</a></li>
                        <li><a href="#">Article Four</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="menu-item-has-children">
                    <a href="#">Accounts <i class="ion ion-ios-arrow-down"></i></a>
                    <div class="menu-subs menu-column-1">
                      <ul>
                        <li><a href="#">Login and Register</a></li>
                        <li><a href="#">Help and Question</a></li>
                        <li><a href="#">Privacy and Policy</a></li>
                        <li><a href="#">Term of Cookies</a></li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div class="header-item-right">
              <a href="#" class="menu-icon"><i class="ion ion-md-search"></i></a>
              <a href="#" class="menu-icon"><i class="ion ion-md-heart"></i></a>
              <a href="#" class="menu-icon"><i class="ion ion-md-cart"></i></a>
              <button type="button" class="menu-mobile-trigger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header> 
      <ScriptTag isHydrating={true} type="text/javascript" src="./Navbar.js" />
    </div>
  );
}

export default App;
