import styles from '../../styles/Footer.module.css'

// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.pagfooeter}>
      <div className={styles.footersection}>
        <h3>FIND US</h3>
        <p>
          Address<br />
          10685-B Hazelhurst Dr. # 35707<br />
          Houston, TX 77043 USA
        </p>
        <p>
          Contact Us<br />
          Phone: +1 (564) 224-7734<br />
          Fax: (281) 754-4941<br />
          Email: info@amperecraft.com
        </p>
        <p>
          Hours<br />
          Monday-Friday: 9:00AM-5:00PM
        </p>
      </div>

      <div className={styles.footersection}>
        <h3>ABOUT US</h3>
        <p>
          AmpereCraft is a recognized leader in PCB manufacturing and assembly
          with 5 years of industry experience. Our team of skilled
          professionals and cutting-edge technology allows us to deliver
          high-quality, precision-engineered PCBs to clients worldwide.
        </p>
      </div>

      <div className={styles.footersection}>
        <h3>SEARCH</h3>
        <form className={styles.searchform} action="/search" method="GET">
          <input type="text" name="q" placeholder="Search for:" />
          <button type="submit">Search</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
