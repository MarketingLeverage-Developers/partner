import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
    return (
        <div className={styles.menu}>
            <MenuItem href="#license">회사소개</MenuItem>
            <MenuItem href="#merit">서비스 소개</MenuItem>
            <MenuItem href="#review">운송정보</MenuItem>
            <MenuItem href="#contact">고객지원</MenuItem>
        </div>
    );
};

export default Menu;

type MenuItemProps = {
    children: React.ReactNode;
    href?: string;
};
const MenuItem = ({ children, href }: MenuItemProps) => {
    return (
        <a href={href} className={styles.menuItem}>
            {children}
        </a>
    );
};
