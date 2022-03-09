import React from 'react';

import BillboardSettingsIcon from './BillboardSettingsIcon';
import styles from './BillboardSettings.module.css';

const BillboardSettings = () => {
  return (
    <div className={styles.billboardSettings}>
      <BillboardSettingsIcon />
    </div>
  );
};

export default BillboardSettings;
