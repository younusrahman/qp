import React, {useEffect, useState} from 'react'
import { ImCancelCircle } from "react-icons/im";
import { HiOutlineBackspace } from "react-icons/hi";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { TiShoppingCart } from "react-icons/ti";
import { TbHeartHandshake } from "react-icons/tb";
import logo from "stuff/QRLogo.png"
// import styles from './Navbar.module.css';
import "./Nav.css"

export default function Navbar() {
	const [menu , setMenu] = useState<Element | null>(document.querySelector('.menu'))
	const [menuOverlay , setMenuOverlay] = useState<Element | null>(document.querySelector('.overlay'))
	const [menuSection , setmenuSection] = useState<Element | null>(document.querySelector('.menu-section'))

	// let menu: Element | null = document.querySelector('.menu');
	// let menuOverlay: Element | null = document.querySelector(".overlay")
	// var menuSection: Element | null = document.querySelector(".menu-section")


  var menuArrow: Element | null = document.querySelector(".menu-mobile-arrow")
	var menuClosed: Element | null = document.querySelector(".menu-mobile-close")
	var menuTrigger: Element | null = document.querySelector(".menu-mobile-trigger")

	useEffect(() =>{
		
	setMenu(document.querySelector('.menu'));
	setMenuOverlay(document.querySelector('.overlay'));
	setmenuSection(document.querySelector('.menu-section'));

	})
	let subMenu : any;


	menuSection?.addEventListener('click', (e) => {
	   if (!menu?.classList.contains('active')) {
		  return;
	   }
	   const eventClosest = e.target as HTMLInputElement;
	   if (eventClosest.closest('.menu-item-has-children')) {
		  const hasChildren = eventClosest.closest('.menu-item-has-children');
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

	   menu?.classList.toggle('active');
	   menuOverlay?.classList.toggle('active');
	}
	function showSubMenu(hasChildren : any) {

	   subMenu = hasChildren.querySelector('.menu-subs');
	   subMenu.classList.add('active');
	   subMenu.style.animation = 'slideLeft 0.5s ease forwards';
	   const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
	//    var changeMenuInnerText = menu?.querySelector('.menu-mobile-title');
	//    changeMenuInnerText.innerHTML = menuTitle;

		let changeMenuInnerText = menu?.querySelector('.menu-mobile-title');

		if (changeMenuInnerText instanceof HTMLElement ) {
			changeMenuInnerText.innerHTML = menuTitle;
		}



	  let addClasslist = menu?.querySelector('.menu-mobile-header');
	

	   if (addClasslist instanceof HTMLElement ) {
		   addClasslist.classList.add('active');
	   }


	}
	function hideSubMenu() {
	   subMenu.style.animation = 'slideRight 0.5s ease forwards';
	
	   setTimeout(() => {
		  subMenu.classList.remove('active');
	   }, 300);
	
	   let changeMenuInnerText = menu?.querySelector('.menu-mobile-title');

	   if (changeMenuInnerText instanceof HTMLElement ) {
		   changeMenuInnerText.innerHTML = 'Quality Products';
	   }

	   let addClasslist = menu?.querySelector('.menu-mobile-header');

	   if (addClasslist instanceof HTMLElement ) {
		   addClasslist.classList.remove('active');
	   }

	}

	const HumbergerMenuToggle = () => { toggleMenu()}




  return (
   
<header className="header" id='GetNavHeight'>
  <div className="container">
    <div className="wrapper">
      <div className="header-item-left">
        <img src={logo} alt="Quality Products" />
        {/* <h1><a href="#" className="brand"> - Quality Products  </a></h1> */}
      </div>
      <div className="header-item-center">
        <div className="overlay"></div>
        <nav className="menu">
          <div className="menu-mobile-header">
            <button type="button" className="menu-mobile-arrow"><HiOutlineBackspace size={25}/></button>
            <div className="menu-mobile-title"
            style={{width:"100%", textAlign:"center", fontWeight:"bold", fontSize:"1.5rem"}} 
            >Quality Products</div>
            <button type="button" className="menu-mobile-close" onClick={() => HumbergerMenuToggle() }><ImCancelCircle size={25}/></button>
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
        <a href="#" className="menu-icon"><HiOutlineSearchCircle/></a>
        <a href="#" className="menu-icon"><TbHeartHandshake/></a>
        <div className='cart-main-div'>
          <a href="#" className="menu-icon"><TiShoppingCart/></a>
          <span className="cart-count">0</span>
        </div>
        
        <button type="button" className="menu-mobile-trigger" onClick={() => HumbergerMenuToggle()}>
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







// import React, {useEffect, useState} from 'react'
// import { ImCancelCircle } from "react-icons/im";
// import { HiOutlineBackspace } from "react-icons/hi";
// import { HiOutlineSearchCircle } from "react-icons/hi";
// import { TiShoppingCart } from "react-icons/ti";
// import { TbHeartHandshake } from "react-icons/tb";
// // import styles from './Navbar.module.css';
// import "./Nav.css"

// export default function Navbar() {
// 	const [menu , setMenu] = useState<Element | null>(document.querySelector('.menu'))
// 	const [menuOverlay , setMenuOverlay] = useState<Element | null>(document.querySelector('.overlay'))
// 	const [menuSection , setmenuSection] = useState<Element | null>(document.querySelector('.menu-section'))

// 	// let menu: Element | null = document.querySelector('.menu');
// 	// let menuOverlay: Element | null = document.querySelector(".overlay")
// 	// var menuSection: Element | null = document.querySelector(".menu-section")


//   var menuArrow: Element | null = document.querySelector(".menu-mobile-arrow")
// 	var menuClosed: Element | null = document.querySelector(".menu-mobile-close")
// 	var menuTrigger: Element | null = document.querySelector(".menu-mobile-trigger")

// 	useEffect(() =>{
		
// 	setMenu(document.querySelector('.menu'));
// 	setMenuOverlay(document.querySelector('.overlay'));
// 	setmenuSection(document.querySelector('.menu-section'));

// 	})
// 	let subMenu : any;


// 	menuSection?.addEventListener('click', (e) => {
// 	   if (!menu?.classList.contains('active')) {
// 		  return;
// 	   }
// 	   const eventClosest = e.target as HTMLInputElement;
// 	   if (eventClosest.closest('.menu-item-has-children')) {
// 		  const hasChildren = eventClosest.closest('.menu-item-has-children');
// 		  showSubMenu(hasChildren);
// 	   }
// 	});
// 	menuArrow?.addEventListener('click', () => {
		
// 	    hideSubMenu();
// 	});
// 	menuTrigger?.addEventListener('click', () => {
		
// 	  toggleMenu();
// 	});
// 	menuClosed?.addEventListener('click', () => {

// 	   toggleMenu();
// 	});
// 	menuOverlay?.addEventListener('click', () => {

// 	   toggleMenu();

// 	});
// 	function toggleMenu() {

// 	   menu?.classList.toggle('active');
// 	   menuOverlay?.classList.toggle('active');
// 	}
// 	function showSubMenu(hasChildren : any) {

// 	   subMenu = hasChildren.querySelector('.menu-subs');
// 	   subMenu.classList.add('active');
// 	   subMenu.style.animation = 'slideLeft 0.5s ease forwards';
// 	   const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
// 	//    var changeMenuInnerText = menu?.querySelector('.menu-mobile-title');
// 	//    changeMenuInnerText.innerHTML = menuTitle;

// 		let changeMenuInnerText = menu?.querySelector('.menu-mobile-title');

// 		if (changeMenuInnerText instanceof HTMLElement ) {
// 			changeMenuInnerText.innerHTML = menuTitle;
// 		}



// 	  let addClasslist = menu?.querySelector('.menu-mobile-header');
	

// 	   if (addClasslist instanceof HTMLElement ) {
// 		   addClasslist.classList.add('active');
// 	   }


// 	}
// 	function hideSubMenu() {
// 	   subMenu.style.animation = 'slideRight 0.5s ease forwards';
	
// 	   setTimeout(() => {
// 		  subMenu.classList.remove('active');
// 	   }, 300);
	
// 	   let changeMenuInnerText = menu?.querySelector('.menu-mobile-title');

// 	   if (changeMenuInnerText instanceof HTMLElement ) {
// 		   changeMenuInnerText.innerHTML = 'Quality Products';
// 	   }

// 	   let addClasslist = menu?.querySelector('.menu-mobile-header');

// 	   if (addClasslist instanceof HTMLElement ) {
// 		   addClasslist.classList.remove('active');
// 	   }

// 	}

// 	const HumbergerMenuToggle = () => { toggleMenu()}




//   return (
   
// <header className="header">
//   <div className="container">
//     <div className="wrapper">
//       <div className="header-item-left">
//         <h1><a href="#" className="brand">Logo</a></h1>
//       </div>
//       <div className="header-item-center">
//         <div className="overlay"></div>
//         <nav className="menu">
//           <div className="menu-mobile-header">
//             <button type="button" className="menu-mobile-arrow"><HiOutlineBackspace size={25}/></button>
//             <div className="menu-mobile-title"
//             style={{width:"100%", textAlign:"center", fontWeight:"bold", fontSize:"1.5rem"}} 
//             >Quality Products</div>
//             <button type="button" className="menu-mobile-close" onClick={() => HumbergerMenuToggle() }><ImCancelCircle size={25}/></button>
//           </div>
//           <ul className="menu-section">
//             <li><a href="#">Home</a></li>
//             <li className="menu-item-has-children">
//               <a href="#">What's New <i className="ion ion-ios-arrow-down"></i></a>
//               <div className="menu-subs menu-mega menu-column-4">
//                 <div className="list-item text-center">
//                   <a href="#">
//                     <img src="./asset/image-1.jpg" className="responsive" alt="New Product"/>
//                     <h4 className="title">Product 1</h4>
//                   </a>
//                 </div>
//                 <div className="list-item text-center">
//                   <a href="#">
//                     <img src="./asset/image-2.jpg" className="responsive" alt="New Product"/>
//                     <h4 className="title">Product 2</h4>
//                   </a>
//                 </div>
//                 <div className="list-item text-center">
//                   <a href="#">
//                     <img src="./asset/image-3.jpg" className="responsive" alt="New Product"/>
//                     <h4 className="title">Product 3</h4>
//                   </a>
//                 </div>
//                 <div className="list-item text-center">
//                   <a href="#">
//                     <img src="./asset/image-4.jpg" className="responsive" alt="New Product"/>
//                     <h4 className="title">Product 4</h4>
//                   </a>
//                 </div>
//               </div>
//             </li>
//             <li className="menu-item-has-children">
//               <a href="#">Category <i className="ion ion-ios-arrow-down"></i></a>
//               <div className="menu-subs menu-mega menu-column-4">
//                 <div className="list-item">
//                   <h4 className="title">Men's Fashion</h4>
//                   <ul>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                   </ul>
//                   <h4 className="title">Kid's Fashion</h4>
//                   <ul>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                   </ul>
//                 </div>
//                 <div className="list-item">
//                   <h4 className="title">Women's Fashion</h4>
//                   <ul>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                   </ul>
//                   <h4 className="title">Health & Beauty</h4>
//                   <ul>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                   </ul>
//                 </div>
//                 <div className="list-item">
//                   <h4 className="title">Home & Lifestyle</h4>
//                   <ul>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                     <li><a href="#">Product List</a></li>
//                   </ul>
//                 </div>
//                 <div className="list-item">
//                   <img src="./asset/image-5.jpg" className="responsive" alt="Shop Product"/>
//                 </div>
//               </div>
//             </li>
//             <li className="menu-item-has-children">
//               <a href="#">Articles <i className="ion ion-ios-arrow-down"></i></a>
//               <div className="menu-subs menu-column-1">
//                 <ul>
//                   <li><a href="#">Article One</a></li>
//                   <li><a href="#">Article Two</a></li>
//                   <li><a href="#">Article Three</a></li>
//                   <li><a href="#">Article Four</a></li>
//                 </ul>
//               </div>
//             </li>
//             <li className="menu-item-has-children">
//               <a href="#">Accounts <i className="ion ion-ios-arrow-down"></i></a>
//               <div className="menu-subs menu-column-1">
//                 <ul>
//                   <li><a href="#">Login and Register</a></li>
//                   <li><a href="#">Help and Question</a></li>
//                   <li><a href="#">Privacy and Policy</a></li>
//                   <li><a href="#">Term of Cookies</a></li>
//                 </ul>
//               </div>
//             </li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//       <div className="header-item-right">
//         <a href="#" className="menu-icon"><HiOutlineSearchCircle/></a>
//         <a href="#" className="menu-icon"><TbHeartHandshake/></a>
//         <a href="#" className="menu-icon"><TiShoppingCart/></a>
//         <button type="button" className="menu-mobile-trigger" onClick={() => HumbergerMenuToggle()}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//       </div>
//     </div>
//   </div>
// </header>
		
//   )
// }
