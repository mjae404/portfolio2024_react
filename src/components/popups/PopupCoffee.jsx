import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import coffee from "../../assets/images/interaction_coffee.jpg";
import coffeewbp from "../../assets/images/interaction_coffee.webp";

function PopupCoffee() {

    return (
        <>
            <h3 className={styles['popup-title']}>연습용 랜딩 페이지</h3>
            <dl className={styles['popup-info-list']}>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기간</dt>
                    <dd className={styles['popup-info-desc']}>2022.08</dd>
                </div>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기여도</dt>
                    <dd className={styles['popup-info-desc']}>100%</dd>
                </div>
            </dl>
            <div className={styles['popup-contents']}>
                <p className={styles['popup-sub-desc']}>개인 연습용 랜딩 페이지 작업.</p>
                <picture>
                    <source srcSet={coffeewbp} type="image/webp" />
                    <img src={coffee} alt="개인 연습용 랜딩 페이지 작업 화면" className={styles['popup-image']} />
                </picture>
            </div>
            <a href="https://mjaedot.com/exercise/001_landing_page_cafe/" target="_blank" rel="noreferrer noopener" className={styles['popup-visit-button']}>
                <span className="blind">웹사이트 방문하기</span>
            </a>
        </>
    );
}

export default PopupCoffee;