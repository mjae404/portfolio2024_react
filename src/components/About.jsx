import React from "react";
import styles from "../styles/components/About.module.scss";
import minjee from "../assets/images/person.jpg";
import minjeewebp from "../assets/images/person.webp";
import {skillsData, aboutData} from "../assets/data/data";
import titleMinjeeKim from "../assets/images/title_minjeekim.svg";

function About() {

    return (
        <section id="about" className={`area ${styles['about-area']}`}>
            <h2 className="blind">About.</h2>
            <div className={styles['about-image-area']}>
                <picture className={styles['about-image-pic']}>
                    <source srcSet={minjeewebp} type="image/webp" />
                    <img src={minjee} alt="" className={styles['about-image']} />
                </picture>
            </div>
            <div className={styles['about-text-area']}>
                <strong className={styles['about-title']}>Minjee Kim</strong>
                <p className={styles['about-desc-text']}>
                    저는 브랜드와 가치를 만드는 것을 좋아하는 사람입니다. 그래서 제가 할 수 있는 것에 안주하지 않고 새로운 것을 도전하려 노력합니다. 외적인 아름다움도 중요하지만, 내적인 튼튼함이 없다면 무의미하다고 생각합니다. 웹표준, 웹접근성에 관심이 있으며 현재에도 지속적으로 학습을 병행하면서 앞으로 나아가는 중입니다. 깃허브 블로그를 운영하며 공부한 것은 블로그에 업로드하고 있습니다.
                </p>
                <ul className={styles['about-skill-list']}>
                    {skillsData.map((skill, index) => (
                        <li key={index} className={styles['about-skill-item']}>{skill}</li>
                    ))}
                </ul>
                <dl className={styles['about-list']}>
                    {aboutData.map((section, index) => (
                        <div key={index} className={styles['about-item']}>
                            <dt className={styles['about-item-title']}>{section.title}</dt>
                            {section.items.map((item, i) => (
                                <dd key={i} className={styles['about-item-contents']}>
                                    <strong className={styles['point']}>
                                        {item.company || item.certification || item.institution}
                                    </strong>
                                    ({item.role || item.authority || item.program}
                                    {item.date && (
                                        <> / {item.date}</>
                                    )})
                                </dd>
                            ))}
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default About;