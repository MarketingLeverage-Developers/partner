'use client';
import React, { useState, useEffect } from 'react';
import styles from './FixedWrapper.module.scss';
import CallImage from '@/assets/images/call.svg';
import ContactImage from '@/assets/images/contact.svg';
import UpImage from '@/assets/images/up.png';

const FixedWrapper = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                // 스크롤 100px 이상이면
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.FixedWrapper}>
            <div className={`${styles.Contact} ${styles.Button}`}>
                <a href="#contact">
                    <img loading="lazy" src={ContactImage.src} alt="Contact" />
                </a>
            </div>
            <div className={`${styles.Call} ${styles.Button}`}>
                <a href="tel:05082010146">
                    <img loading="lazy" src={CallImage.src} alt="Call" />
                </a>
            </div>
            {showScrollTop && (
                <div onClick={scrollToTop} className={`${styles.Call} ${styles.Button}`}>
                    <img loading="lazy" src={UpImage.src} alt="Up" />
                </div>
            )}
        </div>
    );
};

export default FixedWrapper;
