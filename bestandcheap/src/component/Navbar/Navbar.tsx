import React from 'react'

import "./Navbar.css";




export default function Navbar() {
  const menu = document.querySelector('.menu');
  var menuSection: Element | null = document.querySelector(".menu-section") 
  var menuArrow: Element | null = document.querySelector(".menu-mobile-arrow")
  var menuClosed: Element | null = document.querySelector(".menu-mobile-close")
  var menuTrigger: Element | null = document.querySelector(".menu-mobile-trigger")
  var menuOverlay: Element | null = document.querySelector(".overlay")


// const menuSection = menu?.querySelector('.menu-section');
// const menuArrow = menu?.querySelector('.menu-mobile-arrow');
// const menuClosed = menu?.querySelector('.menu-mobile-close');
// const menuTrigger = document.querySelector('.menu-mobile-trigger');
// const menuOverlay = document.querySelector('.overlay');

let subMenu:any;
menuSection?.addEventListener('click', (e) => {
  console.log("windowsssss")
   if (!menu?.classList.contains('active')) {
      return;
   }
   let ev = e.target as HTMLElement
   
   if (ev.closest('.menu-item-has-children')) {
      const hasChildren = ev.closest('.menu-item-has-children');
      showSubMenu(hasChildren);
   }
});
menuArrow?.addEventListener('click', () => {
   hideSubMenu();
});
menuTrigger?.addEventListener('click', () => {
  
   toggleMenu();
});
menuClosed?.addEventListener('click', () => {
   toggleMenu();
});
menuOverlay?.addEventListener('click', () => {
   toggleMenu();
});
function toggleMenu() {

  //  menu?.classList.toggle('active');
  //  menuOverlay?.classList.toggle('active');
     console.log(menuOverlay)
}
function showSubMenu(hasChildren:any) {
   subMenu = hasChildren.querySelector('.menu-subs');
   subMenu.classList.add('active');
   subMenu.style.animation = 'slideLeft 0.5s ease forwards';
   const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
   const el = menu?.querySelector('.menu-mobile-title') as HTMLElement;
    el.innerHTML = menuTitle;

   const elHeader = menu?.querySelector('.menu-mobile-header');
   elHeader?.classList.add('active')
}
function hideSubMenu() {
   subMenu.style.animation = 'slideRight 0.5s ease forwards';
   setTimeout(() => {
      subMenu.classList.remove('active');
   }, 300);
   const elTitle = menu?.querySelector('.menu-mobile-title') as HTMLElement;
   elTitle.innerHTML = '';

   const elMMHeader = menu?.querySelector('.menu-mobile-header');
   elMMHeader?.classList.remove('active')
}
window.onresize = function () {
  
   if (window.innerWidth > 991) {
      if (menu?.classList.contains('active')) {
         toggleMenu();
      }
   }
};
  
  return (
<header className="header">
  <div className="container">
    <div className="wrapper">
      <div className="header-item-left">
        <h1><a href="#" className="brand">Logo</a></h1>
      </div>
      <div className="header-item-center">
        <div className="overlay"></div>
        <nav className="menu">
          <div className="menu-mobile-header">
            <button type="button" className="menu-mobile-arrow"><i className="ion ion-ios-arrow-back"></i></button>
            <div className="menu-mobile-title"></div>
            <button type="button" className="menu-mobile-close"><i className="ion ion-ios-close"></i></button>
          </div>
          <ul className="menu-section">
            <li><a href="#">Home</a></li>
            <li className="menu-item-has-children">
              <a href="#">What's New <i className="ion ion-ios-arrow-down"></i></a>
              <div className="menu-subs menu-mega menu-column-4">
                <div className="list-item text-center">
                  <a href="#">
                    <img src="./asset/image-1.jpg" className="responsive" alt="New Product"/>
                    <h4 className="title">Product 1</h4>
                  </a>
                </div>
                <div className="list-item text-center">
                  <a href="#">
                    <img src="./asset/image-2.jpg" className="responsive" alt="New Product"/>
                    <h4 className="title">Product 2</h4>
                  </a>
                </div>
                <div className="list-item text-center">
                  <a href="#">
                    <img src="./asset/image-3.jpg" className="responsive" alt="New Product"/>
                    <h4 className="title">Product 3</h4>
                  </a>
                </div>
                <div className="list-item text-center">
                  <a href="#">
                    <img src="./asset/image-4.jpg" className="responsive" alt="New Product"/>
                    <h4 className="title">Product 4</h4>
                  </a>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Category <i className="ion ion-ios-arrow-down"></i></a>
              <div className="menu-subs menu-mega menu-column-4">
                <div className="list-item">
                  <h4 className="title">Men's Fashion</h4>
                  <ul>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                  </ul>
                  <h4 className="title">Kid's Fashion</h4>
                  <ul>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                  </ul>
                </div>
                <div className="list-item">
                  <h4 className="title">Women's Fashion</h4>
                  <ul>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                  </ul>
                  <h4 className="title">Health & Beauty</h4>
                  <ul>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                    <li><a href="#">Product List</a></li>
                  </ul>
                </div>
                <div className="list-item">
                  <h4 className="title">Home & Lifestyle</h4>
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
                <div className="list-item">
                  <img src="./asset/image-5.jpg" className="responsive" alt="Shop Product"/>
                </div>
              </div>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Articles <i className="ion ion-ios-arrow-down"></i></a>
              <div className="menu-subs menu-column-1">
                <ul>
                  <li><a href="#">Article One</a></li>
                  <li><a href="#">Article Two</a></li>
                  <li><a href="#">Article Three</a></li>
                  <li><a href="#">Article Four</a></li>
                </ul>
              </div>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Accounts <i className="ion ion-ios-arrow-down"></i></a>
              <div className="menu-subs menu-column-1">
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
      <div className="header-item-right">
        <a href="#" className="menu-icon"><i className="ion ion-md-search"></i></a>
        <a href="#" className="menu-icon"><i className="ion ion-md-heart"></i></a>
        <a href="#" className="menu-icon"><i className="ion ion-md-cart"></i></a>
        <button type="button" className="menu-mobile-trigger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </div>
</header>
  )
}
