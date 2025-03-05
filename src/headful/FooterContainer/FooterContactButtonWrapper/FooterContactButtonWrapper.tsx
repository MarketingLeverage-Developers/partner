import React from 'react';
import styles from './FooterContactButtonWrapper.module.scss';

const FooterContactButtonWrapper = () => {
    return (
        <div className={styles.FooterContactButtonWrapper}>
            <a href="#contact">
                <button className={`${styles.Black} ${styles.Button}`}>무료 상담 받기</button>
            </a>
            <a href="tel:05082010146">
                <button className={styles.Button}>전화 상담 받기</button>
            </a>
        </div>
    );
};

export default FooterContactButtonWrapper;
