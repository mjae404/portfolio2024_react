import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import targetmarketing from "../../assets/images/targetmarketing.jpg";
import targetmarketingwbp from "../../assets/images/targetmarketing.webp";

function PopupTargetmarketing() {

    return (
        <>
            <h3 className={styles['popup-title']}>타겟 마케팅 솔루션</h3>
            <dl className={styles['popup-info-list']}>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기간</dt>
                    <dd className={styles['popup-info-desc']}>2023.02</dd>
                </div>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기여도</dt>
                    <dd className={styles['popup-info-desc']}>100%</dd>
                </div>
            </dl>
            <div className={styles['popup-contents']}>
                <p className={styles['popup-sub-desc']}>SKT 데이터 마케팅 자동화 관련 사이트입니다. 리액트 환경에서 퍼블리싱 작업 및 간단한 프론트 개발 업무를 진행하였습니다.</p>
                <picture>
                    <source srcSet={targetmarketingwbp} type="image/webp" />
                    <img src={targetmarketing} alt="타겟 마케팅 솔루션 화면" className={styles['popup-image']} />
                </picture>
            </div>
            <a href="https://www.targetmarketing.co.kr/" target="_blank" rel="noreferrer noopener" className={styles['popup-visit-button']}>
                <span className="blind">웹사이트 방문하기</span>
            </a>
        </>
    );
}

export default PopupTargetmarketing;