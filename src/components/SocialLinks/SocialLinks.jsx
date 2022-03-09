import React from 'react';

import styles from './SocialLinks.module.css';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';
const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      <a href="https://facebook.com" className={styles.iconLink}>
        <FacebookIcon />
      </a>
      <a href="https://instagram.com" className={styles.iconLink}>
        <InstagramIcon />
      </a>
      <a href="https://twitter.com" className={styles.iconLink}>
        <TwitterIcon />
      </a>
      <a href="https://youtube.com" className={styles.iconLink}>
        <YoutubeIcon />
      </a>
    </div>
  );
};

export default SocialLinks;
