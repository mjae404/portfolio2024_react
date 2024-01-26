import React from "react";
import styles from "../../styles/components/Popup.module.scss";

import tason from "../../assets/images/tason.jpg";
import tasonwebp from "../../assets/images/tason.webp";

function PopupTason() {

    return (
        <>
            <h3 className={styles['popup-title']}>타스온 소개 페이지 리뉴얼</h3>
            <dl className={styles['popup-info-list']}>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기간</dt>
                    <dd className={styles['popup-info-desc']}>2023.07</dd>
                </div>
                <div className={styles['popup-info-item']}>
                    <dt className={styles['popup-info-title']}>기여도</dt>
                    <dd className={styles['popup-info-desc']}>100%</dd>
                </div>
            </dl>
            <div className={styles['popup-contents']}>
                <p className={styles['popup-sub-desc']}>타스온 메인 페이지를 포함하여 소개 페이지 리뉴얼되어 리액트 환경에서 퍼블리싱 작업을 진행했습니다.</p>
                <picture>
                    <source srcSet={tasonwebp} type="image/webp" />
                    <img src={tason} alt="타스온 소개 페이지 리뉴얼 화면" className={styles['popup-image']} />
                </picture>
                <div className={styles['popup-table-wrap']}>
                    <table className={styles['popup-table']}>
                        <colgroup>
                            <col style={{ width : "300px" }} />
                            <col />
                        </colgroup>
                        <thead>
                        <tr>
                            <th>화면</th>
                            <th>비고</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <a href="https://www.tason.com" target="_blank" className={styles['popup-table-link']} rel="noreferrer noopener">메인 페이지</a>
                            </td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/messaging" target="_blank" className={styles['popup-table-link']} rel="noreferrer noopener">통합
                                메시징</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/data-marketing" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">통신 3사 타겟 마케팅</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/ma" target="_blank" className={styles['popup-table-link']} rel="noreferrer noopener">마케팅
                                자동화</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/shopping-mall-platform" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">Cafe24ㆍ고도몰ㆍ메이크샵 연동</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-intro" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-ma-auto-platform" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 마케팅 자동화</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-img-personal" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 이미지 개인화</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-cdp" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - Real Time CDP</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-personal-recommend" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 실시간 개인화 추천</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-customer-data" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 고객 관심사 Data 제공</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-total-msg" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 통합 메시지 개요</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-tms" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - TMS 구축</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-operation" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 운영사업소개</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-effect" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 특징 및 도입효과</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-offer" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 제공기능</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        <tr>
                            <td><a href="https://www.tason.com/#/to/onpremise-step" target="_blank"
                                   className={styles['popup-table-link']} rel="noreferrer noopener">온프레미스 - 이용절차</a></td>
                            <td><p className={styles['popup-table-text']}></p></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PopupTason;