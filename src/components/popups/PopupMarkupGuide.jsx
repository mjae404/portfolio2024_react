import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import markupguide from "../../assets/images/markup_guide.jpg";
import markupguidewbp from "../../assets/images/markup_guide.webp";

function PopupMarkupGuide() {

    return (
        <>
            <h3 className={styles['popup-title']}>마크업 가이드 (개인 프로젝트)</h3>
            <dl className={styles['popup-info-list']}>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기간</dt>
                    <dd className={styles['popup-info-desc']}>2023.04</dd>
                </div>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기여도</dt>
                    <dd className={styles['popup-info-desc']}>100%</dd>
                </div>
            </dl>
            <div className={styles['popup-contents']}>
                <p className={styles['popup-sub-desc']}>개인 리액트 프로젝트용 웹퍼블리싱 가이드입니다.</p>
                <picture>
                    <source srcSet={markupguidewbp} type="image/webp" />
                    <img src={markupguide} alt="개인 리액트 프로젝트용 웹퍼블리싱 가이드 페이지 작업 화면" className={styles['popup-image']} />
                </picture>
            </div>
            <a href="http://mjae.me" target="_blank" rel="noreferrer noopener" className={styles['popup-visit-button']}>
                <span className="blind">웹사이트 방문하기</span>
            </a>
        </>
    );
}

export default PopupMarkupGuide;