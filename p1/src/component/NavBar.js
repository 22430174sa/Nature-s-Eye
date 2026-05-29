
import React from 'react';
import '../Style/NavBar.css';
import {Link} from 'react-router-dom'; 

 const NavBar=() => {
 
 
  return (
    <>
      <header className="header-top">
        <div className="header-container">
          <div className="logo-area">
            <div className="logo-main">Nature's Eye</div>
            <div className="logo-sub">Capturing Earth's Hidden Wonders</div>
          </div>
          <div className="search-area">
            <form className="search-bar-group" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="search-input" placeholder="Discover new place" />
              <button type="submit" className="search-submit-btn">search</button>
            </form>
          </div>
          <div className="actions-area">
          
             <Link to="/Login" className="search-submit-btn" style={{ textDecoration: 'none' }}>Login</Link>
          </div>
        </div>
      </header>
      <nav className="main-navigation-bar">
        <div className="nav-container">
          <ul className="nav-menu-list">
           <Link to="/" className="nav-menu-link">HOME</Link> 
            <li className="nav-menu-item item-has-dropdown">
              <a href="/" className="nav-menu-link" onClick={(e) => e.preventDefault()}>DESTINATION ▾</a>
              <ul className="nested-dropdown-menu">
                <li><a href="/">Beaches</a></li>
                <li><a href="/">Islands</a></li>
                <li><a href="/">Forests</a></li>
                <li><a href="/">Mountains</a></li>
                <li><a href="/">Oceans</a></li>
                <li className="dropdown-divider-line"></li>
                <li><a href="/">Explore All</a></li>
              </ul>
            </li>
            <li className="nav-menu-item item-has-dropdown">
              <a href="/" className="nav-menu-link" onClick={(e) => e.preventDefault()}>PHOTOGRAPHERS ▾</a>
              <ul className="nested-dropdown-menu">
                <li><a href="/">Amjad Ayoub</a></li>
                <li><a href="/">Rasha Mahmoud </a></li>
                <li><a href="/">Hadine Elsaadi</a></li>
                <li className="dropdown-divider-line"></li>
                <li><a href="/">All Photographers</a></li>
              </ul>
            </li>
            <li className="nav-menu-item"><a href="/" className="nav-menu-link"> GALLERY </a></li>
            <li className="nav-menu-item"><Link to="/AboutUs" className="nav-menu-link">ABOUT US</Link></li>
            <li className="nav-menu-item"> <Link to="/Contact" className="nav-menu-link">CONTACT US</Link> </li>

          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;

