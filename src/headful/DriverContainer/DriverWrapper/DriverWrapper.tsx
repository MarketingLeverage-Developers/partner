import React from 'react';
import styles from './DriverWrapper.module.scss';
import DriverImage from '@/assets/images/driver.png';

const DriverWrapper = () => {
    return (
        <div className={styles.DriverWrapper}>
            <div className={styles.Wrapper}>
                <div className={styles.TextWrapper}>
                    <div className={styles.TitleText}>화물지입 기사</div>
                    <div className={styles.SubTitleText}>
                        기사가 트럭을 구입한 후 회사가 보유한 영업용 번호판을 임대하여
                        <br /> 트럭에 번호판을 장착하고 화물을 운송하는 형태
                    </div>
                    <div className={styles.DescriptionText}>
                        <strong>트럭</strong>과 <strong>번호판</strong>을 회사에서 <strong>임대 가능</strong>
                        <br />
                        12톤 미만 차량은 <strong>1종 보통 면허로 운전 가능</strong>
                        <br /> <strong>고정 노선 제공</strong>으로 안정적인 일감 확보
                    </div>
                </div>
                <img className={styles.Image} src={DriverImage.src} />
            </div>
        </div>
    );
};

export default DriverWrapper;
