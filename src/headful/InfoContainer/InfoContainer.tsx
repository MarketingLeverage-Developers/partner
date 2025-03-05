import React from 'react';
import styles from './InfoContainer.module.scss';
import LogoImage from '@/assets/images/logo2.svg';

const InfoContainer = () => {
    return (
        <div className={styles.InfoContainer}>
            <div className={styles.InfoContent}>
                <div className={styles.InfoWrapper}>
                    <img loading="lazy" src={LogoImage.src} />
                    <div className={styles.TextWrapper}>
                        <div>
                            <strong>파트너물류 / 대표자</strong> : 김용민
                        </div>
                        <div>
                            <strong>사업자 등록번호 :</strong> 502-40-44631
                        </div>
                        <div className={styles.AddressWrapper}>
                            <div>인천광역시 부평구 주부토로 236, 제디동 1308호,</div>
                            <div>1309호(갈산동,인천테크노밸리 U1센터)</div>
                        </div>
                    </div>
                </div>
                <div className={styles.PhoneWrapper}>
                    <div className={styles.T}>T.</div>
                    <div className={styles.Phone}>050-8201-0146</div>
                </div>
            </div>
        </div>
    );
};

export default InfoContainer;
