import React from "react";
import styles from "../styles/components/Visual.module.scss";
import Particle from "./Particle";
function Visual() {

    return (
        <section id="main" className={styles['visual-area']}>
            <h2 className="blind">main.</h2>
            <Particle/>
            <div className={styles['visual-area-inner']}>
                <div className={styles['ellipses-container']}>
                    <div className={`${styles.ellipses} ${styles['ellipses-outer-thin']}`}>
                        <div className={`${styles.ellipses} ${styles['ellipses-orbit']}`}></div>
                    </div>
                    <div className={`${styles.ellipses} ${styles['ellipses-outer-thick']}`}></div>
                </div>
                <div className={styles['visual-text-wrap']}>
                    <strong className={styles['visual-title']}>mjaedot</strong>
                    <p className={styles['visual-text']}>markup developer portfolio</p>
                </div>
                <p className={styles['ellipses-coords']}>N 49° 16' 35.173" / W 0° 42' 11.30"</p>
                <div className={styles['scroll-btn']}>
                    <div className={styles['scroll-btn-link']}>
                    <span className={styles['mouse']}>
                        <span></span>
                    </span>
                    </div>
                    <p className={styles['scroll-btn-text']}>scroll me</p>
                </div>
            </div>
        </section>
    );
}

export default Visual;