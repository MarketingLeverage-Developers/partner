import React from 'react';
import styles from './MeritContainer.module.scss';
import MeritBackgroundImage from '@/assets/images/merit-background.webp';
import MeritImage1 from '@/assets/images/merit1.webp';
import MeritImage2 from '@/assets/images/merit2.webp';
import MeritImage3 from '@/assets/images/merit3.webp';

const MeritContainer = () => {
    return (
        <>
            <div id="merit" className={styles.Container}>
                <div className={styles.Content}>
                    <div className={styles.TextWrapper}>
                        <div className={styles.TitleText}>자사 정보 메리트</div>
                        <div className={styles.SubTitleText}>파트너 물류와 함께하면 더 좋은 이유</div>
                    </div>
                </div>
            </div>

            <div className={styles.MeritContainer} style={{ backgroundImage: `url(${MeritBackgroundImage.src})` }}>
                <div className={styles.MeritContent}>
                    {/* <div className={styles.TextWrapper}>
                    <div className={styles.TitleText}>자사 정보 메리트</div>
                    <div className={styles.SubTitleText}>파트너 물류와 함께하면 더 좋은 이유</div>
                </div> */}
                    {/* <div className={styles.BackgroundWrapper}> */}
                    <div className={styles.CardWrapper}>
                        <div className={styles.Card}>
                            <img loading="lazy" src={MeritImage1.src} />
                            <div className={styles.Text}>
                                고정 노선으로 매출 평균
                                <br /> 1200만원~1400만원
                                <br /> <strong>(1000만원 매출보장)</strong>
                            </div>
                        </div>
                        <div className={styles.Card}>
                            <img loading="lazy" src={MeritImage2.src} />
                            <div className={styles.Text}>
                                <strong>순수익 45%~55%</strong>
                                <br /> 500만원 ~700만원 평균치
                            </div>
                        </div>
                        <div className={styles.Card}>
                            <img loading="lazy" src={MeritImage3.src} />
                            <div className={styles.Text}>
                                빈차 운행 없이
                                <br /> <strong>최적 동선 확보</strong> → 수익 극대화
                            </div>
                        </div>
                    </div>
                    <div className={styles.ButtonWrapper}>
                        <button className={styles.Button}>
                            파트너 물류 <strong>무료상담신청</strong>
                        </button>
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </>
    );
};

export default MeritContainer;
