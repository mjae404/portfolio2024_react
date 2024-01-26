import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import uniuni from "../../assets/images/uniuni.jpg";
import uniuniwbp from "../../assets/images/uniuni.webp";

function PopupUniuni() {

    return (
        <>
            <h3 className={styles['popup-title']}>UNIUNI</h3>
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
                <p className={styles['popup-sub-desc']}>모바일용 베트남 화장품 리뷰 커뮤니티. 현재는 사이트가 폐쇄된 상태입니다.</p>
                <picture>
                    <source srcSet={uniuniwbp} type="image/webp" />
                    <img src={uniuni} alt="UNIUNI 작업 화면" className={styles['popup-image']} />
                </picture>
            </div>
            <a href="https://prj-kbeauty.xehub.co.kr/" target="_blank" rel="noreferrer noopener" className={styles['popup-visit-button']}>
                <span className="blind">웹사이트 방문하기</span>
            </a>
        </>
    );
}

export default PopupUniuni;