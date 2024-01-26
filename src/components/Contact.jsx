import React from "react";
import styles from "../styles/components/Contact.module.scss";

function Contact() {

    return (
        <section id="contact" className={`area ${styles['contact-area']}`}>
            <h2 className={styles['contact-title']}>Contact<span className={styles['point']}>.</span></h2>
            <p className={styles['contact-desc']}>
                함께 일할 수 있는 멋진 역량과 경험을 가진 사람이 필요하신가요?<br/>
                저와 나누고 싶으신 말씀이 있으시다면 편하게 메일 주세요:)<br/>
                확인하는 대로 최대한 빠르게 회신드릴게요.
            </p>
            <span className={styles['contact-mail-text']}>
                <a href="mailto:mjaedot@gmail.com" className={styles['contact-mail']}>mjaedot@gmail.com</a>
            </span>
        </section>
    );
}

export default Contact;