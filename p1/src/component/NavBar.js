import React, { useState, useEffect } from 'react';
import '../Style/NavBar.css';
import { Link } from 'react-router-dom'; 

const NavBar = () => {
  const [savedCount, setSavedCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const updateCount = () => {
      const saved = JSON.parse(localStorage.getItem("savedPhotos")) || [];
      setSavedCount(saved.length);
    };
    updateCount();
    window.addEventListener("storage", updateCount);
    window.addEventListener("savedPhotosUpdated", updateCount);
    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("savedPhotosUpdated", updateCount);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (e, dropdownName) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
 
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
            <Link to="/SavedPhotos" className="nav-saved-btn" style={{ textDecoration: 'none' }}>
              <span className="nav-heart-icon">❤️</span>
              <span className="nav-saved-text">Saved</span>
              <span className="nav-saved-badge">{savedCount}</span>
            </Link>
            <Link to="/Login" className="search-submit-btn" style={{ textDecoration: 'none' }}>Login</Link>
          </div>
        </div>
      </header>
      
      <nav className="main-navigation-bar">
        <div className="nav-container">
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => { setIsMenuOpen(!isMenuOpen); setActiveDropdown(null); }}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu-list ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <Link to="/" className="nav-menu-link" onClick={handleLinkClick}>HOME</Link> 
            </li>
            
            <li className={`nav-menu-item item-has-dropdown ${activeDropdown === 'destination' ? 'dropdown-open' : ''}`}>
              <a href="/" className="nav-menu-link" onClick={(e) => handleDropdownToggle(e, 'destination')}>DESTINATION ▾</a>
              <ul className="nested-dropdown-menu">
                <li><Link to="/destinations/beaches" onClick={handleLinkClick}>Beaches</Link></li>
                <li><Link to="/destinations/islands" onClick={handleLinkClick}>Islands</Link></li>
                <li><Link to="/destinations/forests" onClick={handleLinkClick}>Forests</Link></li>
                <li><Link to="/destinations/mountains" onClick={handleLinkClick}>Mountains</Link></li>
                <li><Link to="/destinations/oceans" onClick={handleLinkClick}>Oceans</Link></li>
                <li className="dropdown-divider-line"></li>
                <li><Link to="/gallery" onClick={handleLinkClick}>Explore All</Link></li>
              </ul>
            </li>
            
            <li className={`nav-menu-item item-has-dropdown ${activeDropdown === 'photographers' ? 'dropdown-open' : ''}`}>
              <a href="/" className="nav-menu-link" onClick={(e) => handleDropdownToggle(e, 'photographers')}>PHOTOGRAPHERS ▾</a>
              <ul className="nested-dropdown-menu">
                <li><a href="/" onClick={handleLinkClick}>Amjad Ayoub</a></li>
                <li><a href="/" onClick={handleLinkClick}>Rasha Mahmoud</a></li>
                <li><a href="/" onClick={handleLinkClick}>Hadine Elsaadi</a></li>
                <li className="dropdown-divider-line"></li>
                <li><a href="/" onClick={handleLinkClick}>All Photographers</a></li>
              </ul>
            </li>
            
            <li className="nav-menu-item">
              <Link to="/gallery" className="nav-menu-link" onClick={handleLinkClick}>GALLERY</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/club-expeditions" className="nav-menu-link" onClick={handleLinkClick}>♣ CLUB EXPEDITIONS</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/AboutUs" className="nav-menu-link" onClick={handleLinkClick}>ABOUT US</Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/Contact" className="nav-menu-link" onClick={handleLinkClick}>CONTACT US</Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default NavBar;
