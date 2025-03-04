import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.call}>Questions? Call 1-844-505-2993</p>

      <div className={styles.foot}>
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Ways to Watch</li>
          <li>Corporate Information</li>
          <li>Only on Netflix</li>
        </ul>

        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>

        <ul>
          <li>Account</li>
          <li>Redeem Gift Cards</li>
          <li>Privacy</li>
          <li>Speed Test</li>
        </ul>

        <ul>
          <li>Media Center</li>
          <li>Buy Gift Cards</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
        </ul>
      </div>

      <div className={styles.select}>
        <select>
          <option value="english">English</option>
          <option value="chinese">中文</option>
        </select>
      </div>

      <p className={styles.last}>Netflix India</p>
    </footer>
  );
};

export default Footer;
