import React from 'react';
import styles from './FooterContainer.module.scss';

type FooterContainerProps = {
    children?: React.ReactNode;
};

const FooterContainer = ({ children }: FooterContainerProps) => {
    return <div className={styles.FooterContainer}>{children}</div>;
};

export default FooterContainer;
