import React from 'react';
import styles from './FooterContactForm.module.scss';
import ArrowImage from '@/assets/images/arrow.svg';

const FooterContactForm = () => {
    return (
        <div className={styles.FooterContactForm}>
            <div className={styles.InputWrapper}>
                <div className={styles.NameInputWrapper}>
                    <input className={styles.Input} placeholder="성함" />
                </div>
                <div className={styles.PhoneInputWrapper}>
                    <input className={styles.Input} placeholder="연락처" />-
                    <input className={styles.Input} />-
                    <input className={styles.Input} />
                </div>
            </div>

            <div className={styles.AgreeContentWrapper}>
                <div className={styles.CheckBoxTextWrapper}>
                    <input className={styles.CheckBox} type="checkbox" />
                    <p className={styles.Text}>개인정보 수집 및 이용에 동의합니다</p>
                </div>

                <img src={ArrowImage.src} />
            </div>
            <button className={styles.Button}>상담신청</button>
        </div>
    );
};

export default FooterContactForm;

const Input = () => {
    return <input />;
};

const Checkbox = () => {
    return <input type="checkbox" />;
};

const Button = () => {
    return <button />;
};

const Arrow = () => {
    return <img src={ArrowImage.src} />;
};
