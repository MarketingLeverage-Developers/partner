import React from 'react';
import styles from './FooterContactButtonWrapper.module.scss';

const FooterContactButtonWrapper = () => {
    return (
        <div className={styles.FooterContactButtonWrapper}>
            <button className={`${styles.Black} ${styles.Button}`}>무료 상담 받기</button>
            <button className={styles.Button}>전화 상담 받기</button>
        </div>
    );
};

export default FooterContactButtonWrapper;
