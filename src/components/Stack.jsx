import React from "react";
import styles from "../styles/components/Stack.module.scss";
import visual from "../assets/images/visual.jpg";
import { stacksData } from "../assets/data/data";

function Stack() {

    return (
        <section id="stack" className={`area ${styles['stack-area']}`}>
            <h2 className={styles['stack-title']}>Tech Stack<span className={styles['point']}>.</span></h2>
            <img src={visual} alt="" className={styles['stack-visual-image']} />
            <dl className={styles['stack-list']}>
                {stacksData.map((stack, index) => (
                    <div key={index} className={styles['stack-item']}>
                        <dt className={styles['stack-item-title']}>{stack.title}<span className={styles['point']}>.</span></dt>
                        {stack.points.map((point, index) => (
                            <dd key={index} className={styles['stack-item-desc']}>{point}</dd>
                        ))}
                        {stack.icons.map((icon, index) => (
                            <dd key={index} className={styles['stack-item-icon']}>
                                <img src={icon} alt="" className={styles['stack-item-icon-image']} />
                            </dd>
                        ))}
                    </div>
                ))}
            </dl>
        </section>
    );
}

export default Stack;