import React from 'react';
import styles from './DriverContainer.module.scss';
import DriverBackgroundImage from '@/assets/images/driver-background.png';

type DriverContainerProps = {
    children?: React.ReactNode;
};

const DriverContainer = ({ children }: DriverContainerProps) => {
    return (
        <div className={styles.DriverContainer} style={{ backgroundImage: `url(${DriverBackgroundImage.src})` }}>
            {children}
        </div>
    );
};

export default DriverContainer;
