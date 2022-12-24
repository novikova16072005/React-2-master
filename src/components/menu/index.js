import React from "react";
import './style.css';
import MenuItem from "./menu-item";

function Navigation () {

 const menu = [
  { title: "HOMEPAGE" },
  {
   title: 'PAGES',
   items: [
    { title: 'Full Width Content' },
    { title: 'Content + Left Sidebar' },
    { title: 'Content + Right Sidebar' },
    { title: 'Content + Both Sidebars' },
    { title: 'Contact' },
    { title: '404' },
    { title: 'Testimonials' },
    { title: 'About Us' },
    { title: 'Team Member' },
    { title: 'FAQ' },
   ]
  },
  { title: "ELEMENTS", items: [
    { title: 'Buttons' }, 
    { title: 'Alert Messages' },
    { title: 'Font Icons' },
    { title: 'Call To Action' },
    { title: 'Columns' },
    { title: 'Colums-No Gutter' },
    { title: 'Lists' },
    { title: 'Acordions' },
    { title: 'Tabs' },
    { title: 'Toggles' },
    { title: 'Pricing Tables' },
] 
},

{ title: "PORTFOLIO LAYOUTS", items: [
    { title: 'Full Width Portfolio' }, 
    { title: '2 Column Grid' },
    { title: '2 Col.Grid + Left Sidebar' },
    { title: '2 Col.Grid + Right Sidebar' },
    { title: '2 Col.Grid + Both Sidebars' },
    { title: '3 Colomn Grid' },
    { title: '3 Col.Grid + Left Sidebar' },
    { title: '3 Col.Grid + Left Sidebar' },
    { title: '3 Col.Grid + Both Sidebars' },
    { title: '4 Column Grid' },
] 
},
{ title: "GALERY LAYOUTS", items: [
    { title: 'Full Width Portfolio' }, 
    { title: '2 Column Grid' },
    { title: '2 Col.Grid + Left Sidebar' },
    { title: '2 Col.Grid + Right Sidebar' },
    { title: '2 Col.Grid + Both Sidebars' },
    { title: '3 Colomn Grid' },
    { title: '3 Col.Grid + Left Sidebar' },
    { title: '3 Col.Grid + Left Sidebar' },
    { title: '3 Col.Grid + Both Sidebars' },
    { title: '4 Column Grid' },
    { title: '5 Column Grid' },
] 
},
{ title: "LINK TEXT" },
{ title: "A VERY LONG LINK TEXT" }
 ];

 return (
  <header>
   {menu.map(elem => <MenuItem title={elem.title} items={elem.items} />)}
  </header>
 );
}

export default Navigation;