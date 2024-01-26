import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import tonyryu01 from "../../assets/images/tonyryu01.jpg";
import tonyryuwbp01 from "../../assets/images/tonyryu01.webp";
import tonyryu02 from "../../assets/images/tonyryu02.jpg";
import tonyryuwbp02 from "../../assets/images/tonyryu02.webp";

function PopupTonyryu() {

    return (
        <>
            <h3 className={styles['popup-title']}>건승정한</h3>
            <dl className={styles['popup-info-list']}>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기간</dt>
                    <dd className={styles['popup-info-desc']}>2020.06</dd>
                </div>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기여도</dt>
                    <dd className={styles['popup-info-desc']}>100%</dd>
                </div>
            </dl>
            <div className={styles['popup-contents']}>
                <p className={styles['popup-sub-desc']}>뮤지컬 배우 류정한의 OFFICIAL SITE이며, 뮤지컬 정보 교환 및 단체관람 등의 활발한 문화활동을 함께 하는 동호회의 개념의 모임입니다.</p>
                <picture>
                    <source srcSet={tonyryuwbp01} type="image/webp" />
                    <img src={tonyryu01} alt="건승정한 작업 화면" className={styles['popup-image']} />
                </picture>
                <picture>
                    <source srcSet={tonyryuwbp02} type="image/webp" />
                    <img src={tonyryu02} alt="건승정한 작업 화면" className={styles['popup-image']} />
                </picture>
            </div>
            <a href="https://www.tonyryu.net/" target="_blank" rel="noreferrer noopener" className={styles['popup-visit-button']}>
                <span className="blind">웹사이트 방문하기</span>
            </a>
        </>
    );
}

export default PopupTonyryu;