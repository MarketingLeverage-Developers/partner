import React from 'react';
import styles from './LicenseContainer.module.scss';
import LicenseImage from '@/assets/images/license.webp';
import LicenseBackgroundImage from '@/assets/images/license-background.webp';

const LicenseContainer = () => {
    return (
        <div id="license" className={styles.LicenseContainer}>
            <div className={styles.LicenseContent}>
                <div
                    className={styles.LicenseWrapper}
                    style={{ backgroundImage: `url(${LicenseBackgroundImage.src})` }}
                >
                    <div className={styles.TextWrapper}>
                        <div className={styles.TitleText}>지입기사 지원자격(자격증)</div>
                        <div className={styles.SubTitleText}>자격증 취득 요약 방법 설명</div>
                        <div className={styles.DescriptionText}>
                            운전면허 <strong>1종 보통 이상</strong> & 운전경력 <strong>1년충족</strong>
                            <br />
                            <strong>필기시험</strong> 응시 & 합격 (한국교통안전공단)
                            <br />
                            8시간 교육 이수 후 <strong>수료증 발급</strong>
                            <br />
                            자격증 취득 후 <strong>화물운송업 등록</strong> 가능
                        </div>
                    </div>
                    <img loading="lazy" className={styles.Image} src={LicenseImage.src} />
                </div>
            </div>
        </div>
    );
};

export default LicenseContainer;
