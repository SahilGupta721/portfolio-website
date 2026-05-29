import Link from "next/link";
import { event } from "../lib/analytics";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      event({
        action: "nav_click",
        category: "Navbar",
        label: `Scrolled to ${id} section`,
      });
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarInner}>
          {/* Logo */}
          <Link className={styles.navbarLogo} href="/">
            <svg
              className={styles.logoIcon}
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path d="M24 4H42V30.6667H24V44H6V17.3333H24V4Z"></path>
            </svg>
            <span className={styles.logoText}>Sahil Gupta</span>
          </Link>

          {/* Center navigation links */}
          <nav className={styles.navbarLinks}>
            <div className={styles.linksInner}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  className={styles.navLink}
                  onClick={() => handleScroll(link.id)}
                  style={{ cursor: "pointer" }}
                >
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
