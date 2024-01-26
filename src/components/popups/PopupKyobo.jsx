import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import kyobo from "../../assets/images/kyobo.jpg";
import kyobowbp from "../../assets/images/kyobo.webp";
import kyobo02 from "../../assets/images/kyobo02.jpg";
import kyobowbp02 from "../../assets/images/kyobo02.webp";

function PopupKyobo() {

    return (
        <>
            <h3 className={styles['popup-title']}>교보문고 신입사원 부트캠프 과제</h3>
            <dl className={styles['popup-info-list']}>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기간</dt>
                    <dd className={styles['popup-info-desc']}>2022.09</dd>
                </div>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기여도</dt>
                    <dd className={styles['popup-info-desc']}>100%</dd>
                </div>
            </dl>
            <div className={styles['popup-contents']}>
                <p className={styles['popup-sub-desc']}>교보문고 신입사원 부트캠프 공통과제 과제로, 퍼블리싱 작업을 100% 담당하였습니다.</p>
                <picture>
                    <source srcSet={kyobowbp} type="image/webp" />
                    <img src={kyobo} alt="교보문고 신입사원 부트캠프 과제 화면" className={styles['popup-image']} />
                </picture>
                <picture>
                    <source srcSet={kyobowbp02} type="image/webp" />
                    <img src={kyobo02} alt="교보문고 신입사원 부트캠프 과제 화면" className={styles['popup-image']} />
                </picture>
            </div>
            <a href="https://mjaedot.com/kyobo_bootcamp/" target="_blank" rel="noreferrer noopener" className={styles['popup-visit-button']}>
                <span className="blind">웹사이트 방문하기</span>
            </a>
        </>
    );
}

export default PopupKyobo;