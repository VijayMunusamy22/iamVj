"use client";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerCopyArea}>
        <p className={styles.copyText}>
          &copy; Webpage developed and mainted by Vijay Munusamy - 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
