import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import humuson from "../../assets/images/humuson.jpg";
import humusonwbp from "../../assets/images/humuson.webp";

function PopupHumuson() {

    return (
        <>
            <h3 className={styles['popup-title']}>휴머스온</h3>
            <dl className={styles['popup-info-list']}>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기간</dt>
                    <dd className={styles['popup-info-desc']}>2023.03</dd>
                </div>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기여도</dt>
                    <dd className={styles['popup-info-desc']}>100%</dd>
                </div>
            </dl>
            <div className={styles['popup-contents']}>
                <p className={styles['popup-sub-desc']}>워드프레스로 제작되어 있던 사이트를 리액트 환경으로 세팅하여 퍼블리싱 작업 및 간단한 프론트 개발 업무를 진행하였습니다.</p>
                <picture>
                    <source srcSet={humusonwbp} type="image/webp" />
                    <img src={humuson} alt="휴머스온 화면" className={styles['popup-image']} />
                </picture>
            </div>
            <a href="https://humuson.com/" target="_blank" rel="noreferrer noopener" className={styles['popup-visit-button']}>
                <span className="blind">웹사이트 방문하기</span>
            </a>
        </>
    );
}

export default PopupHumuson;