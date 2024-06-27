import React from "react";
import styles from "../styles/components/Visual.module.scss";
import Particle from "./Particle";
import locationImage from "../assets/images/main-visual-location.svg";
import visualLogo from "../assets/images/main-visual-logo.svg";
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
                    <img src={visualLogo} alt="mjaedot" className={styles['visual-title']}/>
                    <p className={styles['visual-text']}>markup developer portfolio</p>
                </div>
                <div className={styles['ellipses-coords']}>
                    <img src={locationImage} className={styles['ellipses-coords-image']}/>
                </div>
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