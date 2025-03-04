import React from 'react';
import styles from './IntroContainer.module.scss';
import IntroBackgroundImage from '@/assets/images/intro-background.png';

type IntroContainerProps = {
    children: React.ReactNode;
};

const IntroContainer = ({ children }: IntroContainerProps) => {
    return (
        <div className={styles.IntroContainer} style={{ backgroundImage: `url(${IntroBackgroundImage.src})` }}>
            {children}
        </div>
    );
};

export default IntroContainer;
