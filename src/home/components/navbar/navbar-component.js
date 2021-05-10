import React, { Component } from 'react';
import './navbar-component.css';

const categories = ["CATEGORY", "CATEGORY", "CATEGORY"];
class Navbar  extends Component {
    render(){
        return <nav className="navbar navbar-expand-lg navbar-light flex-wrap">
<a className="col-1 d-flex  p-2">
    <img className="menuIcons" src="http://espanafascinante.com/test/icons/menu.png"></img>
</a>
<a className="col-10 d-flex justify-content-center p-2">
    <img className="menuIcons" src="http://espanafascinante.com/test/logo/LOGO.png"></img>
</a>
<a className="col-1  d-flex justify-content-end p-2">
    <img className="menuIcons" src="http://espanafascinante.com/test/icons/search.png"></img>
</a>
<ul className="subNav d-flex justify-content-center col-12">

      {categories.map(category => (
        <li className="p-2" key={category.objectID}>
         {category}
        </li>
      ))}
</ul>
</nav>;
    }
}
export default Navbar;