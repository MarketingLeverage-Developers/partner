'use client';
import React, { ChangeEventHandler, MouseEventHandler, useRef, useState } from 'react';
import styles from '@/headful/ContactContainer/ContactContainer.module.scss';
import axiosInstance from '@/axios';
import axios from 'axios';
import ArrowImage from '@/assets/images/arrow.svg';

const ContactForm = () => {
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
                siteUrl: 'partner.kr',
                inquireLocation: '메인-하단',
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
        <div className={styles.ContactContent}>
            <div className={styles.TextWrapper}>
                <div className={styles.Title}>상담 신청</div>
                <div className={styles.SubTitle}>빠르고 정확한 상담을 위해 노력하겠습니다.</div>
            </div>
            <div className={styles.InputWrapper}>
                <div className={styles.Input}>
                    <label>
                        성함<strong>*</strong>
                    </label>
                    <input value={name} onChange={handleNameInputChange} />
                </div>
                <div className={styles.Input}>
                    <label>
                        연락처<strong>*</strong>
                    </label>
                    <div className={styles.Inputs}>
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
                <input className={styles.Check} type="checkbox" checked={isAgree} onChange={handleCheckBoxChange} />
                <div className={styles.Text}>개인정보 수집 및 이용에 동의합니다.</div>
                <img loading="lazy" className={styles.Arrow} src={ArrowImage.src} />
            </div>
            <div className={styles.ButtonWrapper}>
                <button disabled={submitDisabled} onClick={handleSubmitButtonClick}>
                    파트너 물류 <strong>무료상담신청</strong>
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
