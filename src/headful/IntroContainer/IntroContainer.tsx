import React from 'react';
import styles from './IntroContainer.module.scss';
import IntroBackgroundImage from '@/assets/images/intro-background.webp';
import IntroForm from '@/components/IntroForm';

const IntroContainer = () => {
    return (
        <div className={styles.IntroContainer} style={{ backgroundImage: `url(${IntroBackgroundImage.src})` }}>
            <div className={styles.IntroContent}>
                <div className={styles.ContentWrapper}>
                    <div className={styles.TextWrapper}>
                        <div className={styles.Text}>고정 노선 제공, 공차 운행 최소화로 더 높은 순수익</div>
                        <div className={`${styles.Large} ${styles.Text}`}>
                            초기 비용 없이 안정적인 수익으로
                            <br />월 1,000만원 매출을 보장합니다.
                        </div>
                    </div>

                    <a href="#contact">
                        <button className={styles.Button}>파트너 물류 무료상담신청</button>
                    </a>
                </div>
                <IntroForm />
            </div>
        </div>
    );
};

export default IntroContainer;
