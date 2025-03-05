import React from 'react';
import styles from './ContactContainer.module.scss';
import ContactBackgroundImage from '@/assets/images/contact-background.webp';
import ContactForm from '@/components/ContactForm';

const ContactContainer = () => {
    return (
        <div
            id="contact"
            className={styles.ContactContainer}
            style={{ backgroundImage: `url(${ContactBackgroundImage.src})` }}
        >
            <ContactForm />
        </div>
    );
};

export default ContactContainer;
