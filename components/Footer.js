import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInner}>
          {/* Logo */}
          <Link href="/" className={styles.footerLogo}>
            <div className={styles.footerLogoIcon}>
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2 className={styles.footerLogoText}>Sahil Gupta</h2>
          </Link>

          {/* Footer Links */}
          <div className={styles.footerLinksSection}>
            <p className={styles.footerCopy}>
              &copy; {new Date().getFullYear()} Sahil Gupta. All Rights
              Reserved.
            </p>
            <div className={styles.footerLinks}>
              <Link
                href="mailto:sahilgupta70500@gmail.com"
                className={styles.footerLink}
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
