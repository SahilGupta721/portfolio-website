import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { event } from '../pages/analytics';

function Navbar() {
  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      // Track GA event
      event({
        action: "nav_click",
        category: "Navbar",
        label: `Scrolled to ${id} section`
      });
    }
  };


  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Rounded translucent bar */}
        <div className="navbar-inner">

          {/* Logo */}
          <Link className="navbar-logo" to="/">
            <svg className="logo-icon" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M24 4H42V30.6667H24V44H6V17.3333H24V4Z"></path>
            </svg>
            <span className="logo-text">Sahil Gupta</span>
          </Link>

          {/* Center navigation links */}
          <nav className="navbar-links">
            <div className="links-inner">
              {navLinks.map((link) => (
                <a key={link.id} className="nav-link" onClick={() => handleScroll(link.id)}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
