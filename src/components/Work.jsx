import React, { useState } from 'react';
import styles from "../styles/components/Work.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { workData, popupData } from "../assets/data/data";
import Popup from "./Popup";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Work() {
    const [activePopup, setActivePopup] = useState(null);

    const openPopup = (id) => {
        setActivePopup(id);
    };

    const closePopup = () => {
        setActivePopup(null);
    };

    return (
        <section id="work" className={`area ${styles['work-area']}`}>
            <h2 className={styles['work-title']}>Work<span className={styles['point']}>.</span></h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={styles['work-swiper']}
            >
                {workData.map((item, index) => (
                    <SwiperSlide key={index} className={styles['work-swiper-item']}>
                        <div className={styles['work-swiper-item-inner']}>
                            <div className={styles['work-swiper-image-area']}>
                                <picture className={styles['work-swiper-image-pic']}>
                                    <source srcSet={item.webpSource} type="image/webp" />
                                    <img src={item.imageSource} alt={item.altText} className={styles['work-swiper-image']} />
                                </picture>
                            </div>
                            <div className={styles['work-swiper-text-area']}>
                                <strong className={styles['work-swiper-title']}>{item.title}</strong>
                                <dl className={styles['work-swiper-info-list']}>
                                    <div className={styles['work-swiper-info-item']}>
                                        <dt className={styles['work-swiper-info-title']}>기간</dt>
                                        <dd className={styles['work-swiper-info-contents']}>{item.period}</dd>
                                    </div>
                                    <div className={styles['work-swiper-info-item']}>
                                        <dt className={styles['work-swiper-info-title']}>기여도</dt>
                                        <dd className={styles['work-swiper-info-contents']}>{item.contribution}</dd>
                                    </div>
                                </dl>
                                <p className={styles['work-swiper-desc']}>{item.description}</p>
                                <a href={item.link} className={styles['work-swiper-button']} target="_blank" rel="noopener noreferrer">바로가기</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ul className={styles['work-list']}>
                {popupData.map((popup) => (
                    <li className={styles['work-item']} key={popup.id}>
                        <button type="button" className={`${styles['work-popup-button']} ${styles[popup.class]}`} onClick={() => openPopup(popup.class)} aria-haspopup="true" aria-controls={popup.id} aria-expanded={popup.id === activePopup}>
                            <span className={styles['work-popup-text']}>{popup.text}</span>
                        </button>
                        <Popup
                            isOpen={popup.id === activePopup}
                            contents={popup.contents}
                            onClose={closePopup}
                            popupId={popup.class}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Work;