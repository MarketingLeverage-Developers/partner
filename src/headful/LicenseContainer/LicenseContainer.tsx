import React from 'react';
import styles from './LicenseContainer.module.scss';

type LicenseContainerProps = {
    children?: React.ReactNode;
};

const LicenseContainer = ({ children }: LicenseContainerProps) => {
    return <div className={styles.LicenseContainer}>{children}</div>;
};

export default LicenseContainer;
