'use client';
import axiosInstance from '@/axios';
import axios from 'axios';
import React, { ChangeEventHandler, MouseEventHandler, useEffect, useRef, useState } from 'react';
import styles from '@/headful/IntroContainer/IntroContainer.module.scss';
import ArrowImage from '@/assets/images/arrow-black.svg';

const IntroForm = () => {
    const [name, setName] = useState('');
    const firstPhoneRef = useRef<HTMLInputElement>(null);
    const middlePhoneRef = useRef<HTMLInputElement>(null);
    const lastPhoneRef = useRef<HTMLInputElement>(null);
    const [firstPhone, setFirstPhone] = useState('');
    const [middlePhone, setMiddlePhone] = useState('');
    const [lastPhone, setLastPhone] = useState('');
    const [isAgree, setIsAgree] = useState(true);

    const handleNameInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    };

    const handleFirstPhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        setFirstPhone(numericValue);
        if (numericValue.length === 3 && middlePhoneRef.current) {
            middlePhoneRef.current.focus();
        }
    };

    const handleMiddlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        setMiddlePhone(numericValue);
        if (numericValue.length === 4 && lastPhoneRef.current) {
            lastPhoneRef.current.focus();
        }
    };

    const handleLastPhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/\D/g, '');
        setLastPhone(numericValue);
    };

    const handleCheckBoxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setIsAgree(e.target.checked);
    };

    const handleSubmitButtonClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        try {
            await axiosInstance.post('/client/inquire', {
                name,
                firstPhone,
                middlePhone,
                lastPhone,
                siteUrl: '파트너물류.kr',
                inquireLocation: '메인-상단',
            });
            window.alert('문의가 접수되었습니다!');
            setName('');
            setFirstPhone('');
            setMiddlePhone('');
            setLastPhone('');
            setIsAgree(true);
        } catch (e) {
            if (axios.isAxiosError(e) && e.response?.data?.result?.message) {
                window.alert(e.response.data.result.message);
            } else if (e instanceof Error) {
                window.alert(e.message);
            } else {
                window.alert('An unknown error occurred');
            }
        }
    };

    const submitAbled =
        name && firstPhone.length === 3 && middlePhone.length === 4 && lastPhone.length === 4 && isAgree;
    const submitDisabled = !submitAbled;

    return (
        <div className={styles.Form}>
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
                        <input value={name} onChange={handleNameInputChange} />
                    </div>
                </div>
                <div className={styles.Input}>
                    <label>연락처</label>
                    <div className={styles.PhoneInputWrapper}>
                        <input
                            ref={firstPhoneRef}
                            value={firstPhone}
                            onChange={handleFirstPhoneInputChange}
                            maxLength={3}
                        />
                        -
                        <input
                            ref={middlePhoneRef}
                            value={middlePhone}
                            onChange={handleMiddlePhoneInputChange}
                            maxLength={4}
                        />
                        -
                        <input
                            ref={lastPhoneRef}
                            value={lastPhone}
                            onChange={handleLastPhoneInputChange}
                            maxLength={4}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.AgreeWrapper}>
                <div className={styles.CheckBoxTextWrapper}>
                    <input
                        className={styles.CheckBox}
                        type="checkbox"
                        checked={isAgree}
                        onChange={handleCheckBoxChange}
                    />
                    <p className={styles.Text}>개인정보 수집 및 이용에 동의합니다</p>
                </div>

                <img loading="lazy" src={ArrowImage.src} />
            </div>

            <div className={styles.ButtonWrapper}>
                <button className={styles.Button} disabled={submitDisabled} onClick={handleSubmitButtonClick}>
                    무료 상담 신청
                </button>
            </div>
        </div>
    );
};

export default IntroForm;
