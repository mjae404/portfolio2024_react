import React from "react";
import styles from "../styles/components/Header.module.scss";

function Header() {

    return (
        <header className={styles['header']}>
            <div className={styles['header-inner']}>
                <div className={styles['header-title-wrap']}>
                    <h1 className={styles['header-title']}>Minjee's Portfolio</h1>
                </div>
                <nav className={styles['header-nav']}>
                    <ul className={styles['header-nav-list']}>
                        <li className={styles['header-nav-item']}>
                            <a href="https://github.com/mjae404 " className={`${styles['header-nav-link']} ${styles.github}`} target="_blank" rel="noreferrer noopener">Github</a>
                        </li>
                        <li className={styles['header-nav-item']}>
                            <a href="mailto:mjaedot@gmail.com" className={`${styles['header-nav-link']} ${styles.email}`} target="_blank" rel="noreferrer noopener">Mail</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;