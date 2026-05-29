import Services from "./Services";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.storiesPage}>
      <main className={styles.isolate}>
        {/* About Section */}
        <div id="about" className={styles.heroSectionAb}>
          <div className={styles.heroContainerAb}>
            <div className={styles.heroTextAb}>
              <p className={styles.label}>About Me</p>
              <h1>
                Hi,
                <br />
                I&apos;m Sahil Gupta
              </h1>
              <p className={styles.description}>
                I am particularly drawn to opportunities that enable me to apply
                my software engineering expertise to impactful, forward-thinking
                projects. I thrive in collaborative, cross-functional
                environments where I can contribute to building robust,
                scalable, and innovative software solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className={styles.section}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionGrid}>
              <div className={styles.sectionText}>
                <p className={styles.label}>My Vision</p>
                <h2>Empowering Through Technology</h2>
                <p>
                  My vision is to combine technical excellence with leadership
                  and collaboration. I aspire to build software that connects
                  people, grow through meaningful networking, and take the
                  spotlight in opportunities that challenge me to innovate,
                  inspire, and lead.
                </p>
              </div>
              <div className={styles.sectionImage}>
                <div className={styles.imageWrapper}>
                  <img
                    id="my-photo"
                    src="/sahil_ph.jpg"
                    alt="Sahil Gupta"
                  />
                  <div className={styles.imageGradient}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <Services />

        {/* CTA Section */}
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaSection} id="contact">
            <div className={styles.ctaContent}>
              <h2>Let&apos;s Build the Future Together</h2>
              <p>
                I&apos;m driven to craft engaging and meaningful web experiences
                that inspire and connect people. Join me as I continue to explore,
                create, and innovate in the tech world.
              </p>
              <div className={styles.ctaButtons}>
                <a
                  href="mailto:sahilgupta70500@gmail.com"
                  className={styles.ctaPrimary}
                >
                  Get Started
                  <svg
                    className={styles.ctaIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/sahilgupta123"
                  className={styles.ctaSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://github.com/sahilgupta721"
                  className={styles.ctaSecondary}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my Work <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className={`${styles.gradientCircle} ${styles.circleTopRight}`}></div>
          <div className={`${styles.gradientCircle} ${styles.circleBottomLeft}`}></div>
        </div>
      </main>
    </div>
  );
}
