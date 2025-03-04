import React from 'react';
import styles from './MeritContainer.module.scss';

type MeritContainerProps = {
    children: React.ReactNode;
};

const MeritContainer = ({ children }: MeritContainerProps) => {
    return <div className={styles.MeritContainer}>{children}</div>;
};

export default MeritContainer;
