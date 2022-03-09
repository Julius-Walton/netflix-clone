import React from 'react';

import styles from './FooterLinks.module.css';
const FooterLinks = () => {
  const links = [
    'Audio and Subtitles',
    'Audio Description',
    'Help Center',
    'Gift Cards',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Terms of Use',
    'Privacy',
    'Legal Notices',
    'Cookie Preferences',
    'Impressum',
    'Contact Us',
  ];
  return (
    <ul className={styles.linksList}>
      {links.map(link => (
        <li className={styles.footerItem} key={link}>
          <a href="/">{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
