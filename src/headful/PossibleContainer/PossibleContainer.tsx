import React from 'react';
import styles from './PossibleContainer.module.scss';
import PossibleBackgroundIamge from '@/assets/images/possible-background.webp';
import PossibleMobileBackgroundImage from '@/assets/images/possible-mobile-background.webp';

const PossibleContainer = () => {
    return (
        <>
            <div className={styles.Container} style={{ backgroundImage: `url(${PossibleMobileBackgroundImage.src})` }}>
                <div className={styles.Content}>
                    <div className={styles.TextWrapper}>
                        <div className={styles.Title}>초보자도 가능한 이유</div>
                        <div className={styles.SubTitle}>파트너 물류는 초보자도 지입기사로 합류 가능합니다.</div>
                    </div>
                </div>
            </div>
            <div className={styles.PossibleContainer}>
                <div className={styles.PossibleContent}>
                    <div className={styles.LeftWrapper}>
                        <div className={styles.TextWrapper}>
                            <div className={styles.Title}>
                                초보자도
                                <br /> 가능한 이유
                            </div>
                            <div className={styles.SubTitle}>
                                파트너 물류는
                                <br /> 초보자도 지입기사로
                                <br /> 합류 가능합니다.
                            </div>
                        </div>
                    </div>
                    <div className={styles.RightWrapper}>
                        <div className={styles.PointItem}>
                            <div className={styles.PolygonWrapper}>
                                <div className={`${styles.Dot} ${styles.Primary}`}></div>
                                <div className={styles.Line} />
                            </div>

                            <div className={styles.TextWrapper}>
                                <div className={styles.Title}>
                                    초기 비용 부담 없음
                                    <br /> (전액 할부 가능)
                                </div>
                                <div className={styles.SubTitle}>
                                    <span className={styles.HighLightWrapper}>
                                        큰 비용 없이 시작 가능!
                                        <div className={styles.HighLight} />
                                    </span>
                                    <br />
                                    부담 없이 차량을 확보하고,
                                    <br /> 할부로 유연하게 운영하세요.
                                </div>
                            </div>
                        </div>
                        <div className={styles.PointItem}>
                            <div className={styles.PolygonWrapper}>
                                <div className={styles.Dot}></div>
                                <div className={styles.Line} />
                            </div>
                            <div className={styles.TextWrapper}>
                                <div className={styles.Title}>
                                    운전 연수 제공 &<br /> 신용 낮아도 임대차 가능
                                </div>
                                <div className={styles.SubTitle}>
                                    <span className={styles.HighLightWrapper}>
                                        운전 경험이 없어도 OK!
                                        <div className={styles.HighLight} />
                                    </span>
                                    <br /> 초보자도 쉽게 적응할 수 있도록 연수 지원 및<br /> 신용 등급이 낮아도 차량
                                    임대 가능!
                                </div>
                            </div>
                        </div>
                        <div className={styles.PointItem}>
                            <div className={styles.PolygonWrapper}>
                                <div className={styles.Dot}></div>
                                <div className={styles.Line} />
                            </div>
                            <div className={styles.TextWrapper}>
                                <div className={styles.Title}>
                                    1년 후 차량 위탁 가능
                                    <br /> → 부담 없는 운영
                                </div>
                                <div className={styles.SubTitle}>
                                    <span className={styles.HighLightWrapper}>
                                        장기적인 부담 없이 유연한 운영!
                                        <div className={styles.HighLight} />
                                    </span>
                                    <br /> 1년 후 차량 위탁이 가능해 리스크 최소화!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={styles.ImageWrapper}
                    style={{ backgroundImage: `url(${PossibleBackgroundIamge.src})` }}
                />
            </div>
        </>
    );
};

export default PossibleContainer;
