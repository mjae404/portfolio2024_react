import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import xeboard01 from "../../assets/images/xe01.jpg";
import xeboardwbp01 from "../../assets/images/xe01.webp";
import xeboard02 from "../../assets/images/xe02.jpg";
import xeboardwbp02 from "../../assets/images/xe02.webp";
import xeboard03 from "../../assets/images/xe03.jpg";
import xeboardwbp03 from "../../assets/images/xe03.webp";

function PopupXeboard() {

    return (
        <>
            <h3 className={styles['popup-title']}>XE3 게시판 스킨</h3>
            <dl className={styles['popup-info-list']}>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기간</dt>
                    <dd className={styles['popup-info-desc']}>2020.03 / 2020.09 (리뉴얼)</dd>
                </div>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기여도</dt>
                    <dd className={styles['popup-info-desc']}>100%</dd>
                </div>
            </dl>
            <div className={styles['popup-contents']}>
                <p className={styles['popup-sub-desc']}>※ 현재 배포(마스터 브랜치)된 게시판은 리뉴얼 전 게시판이며 리뉴얼된 코드는 develop 브랜치에 있습니다.</p>
                <picture>
                    <source srcSet={xeboardwbp01} type="image/webp" />
                    <img src={xeboard01} alt="개인 리액트 프로젝트용 웹퍼블리싱 가이드 페이지 작업 화면" className={styles['popup-image']} />
                </picture>
                <picture>
                    <source srcSet={xeboardwbp02} type="image/webp" />
                    <img src={xeboard02} alt="개인 리액트 프로젝트용 웹퍼블리싱 가이드 페이지 작업 화면" className={styles['popup-image']} />
                </picture>
                <picture>
                    <source srcSet={xeboardwbp03} type="image/webp" />
                    <img src={xeboard03} alt="개인 리액트 프로젝트용 웹퍼블리싱 가이드 페이지 작업 화면" className={styles['popup-image']} />
                </picture>
            </div>
            <a href="http://mjae.me" target="_blank" rel="noreferrer noopener" className={styles['popup-visit-button']}>
                <span className="blind">웹사이트 방문하기</span>
            </a>
        </>
    );
}

export default PopupXeboard;