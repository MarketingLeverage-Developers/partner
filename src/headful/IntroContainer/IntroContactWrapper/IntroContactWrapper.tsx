import React from 'react';
import styles from './IntroContactWrapper.module.scss';
import ArrowImage from '@/assets/images/arrow-black.svg';

const IntroContactWrapper = () => {
    return (
        <div className={styles.IntroContactWrapper}>
            <div className={styles.ContentWrapper}>
                <div className={styles.TextWrapper}>
                    <div className={styles.Text}>고정 노선 제공, 공차 운행 최소화로 더 높은 순수익</div>
                    <div className={`${styles.Large} ${styles.Text}`}>
                        초기 비용 없이 안정적인 수익으로
                        <br />월 1,000만원 매출을 보장합니다.
                    </div>
                </div>

                <button className={styles.Button}>파트너 물류 무료상담신청</button>
            </div>
            <div className={styles.IntroForm}>
                <div className={styles.TextWrapper}>
                    <div className={`${styles.Title} ${styles.Text}`}>
                        실시간 <strong>무료 상담</strong>
                    </div>
                    <div className={`${styles.SubTitle} ${styles.Text}`}>친절한 상담 도와드리겠습니다.</div>
                </div>

                <div className={styles.InputWrapper}>
                    <div className={styles.Input}>
                        <label>성함</label>
                        <div className={styles.NameInputWrapper}>
                            <input />
                        </div>
                    </div>
                    <div className={styles.Input}>
                        <label>연락처</label>
                        <div className={styles.PhoneInputWrapper}>
                            <input />-
                            <input />-
                            <input />
                        </div>
                    </div>
                </div>

                <div className={styles.AgreeContentWrapper}>
                    <div className={styles.CheckBoxTextWrapper}>
                        <input className={styles.CheckBox} type="checkbox" />
                        <p className={styles.Text}>개인정보 수집 및 이용에 동의합니다</p>
                    </div>

                    <img src={ArrowImage.src} />
                </div>

                <button className={styles.Button}>무료 상담 신청</button>
            </div>
        </div>
    );
};

export default IntroContactWrapper;
