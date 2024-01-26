import React, { useEffect, useRef } from "react";
import styles from "../styles/components/Popup.module.scss";

function Popup({ contents, onClose, isOpen }) {
    const popupRef = useRef(null);

    useEffect(() => {
        const popupElement = popupRef.current;

        let animationFrameId;

        const animateOpacity = (timestamp) => {
            const duration = 5000; // Animation duration in milliseconds
            const startOpacity = parseFloat(popupElement.style.opacity) || 0;
            const endOpacity = isOpen ? 1 : 0;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
                popupElement.style.opacity = startOpacity + progress * (endOpacity - startOpacity);
                animationFrameId = requestAnimationFrame(animateOpacity);
            } else {
                popupElement.style.opacity = endOpacity;
                cancelAnimationFrame(animationFrameId);
            }
        };

        let startTime;

        if (isOpen) {
            document.body.style.overflow = "hidden";
            startTime = performance.now();
            animateOpacity(startTime);
        } else {
            startTime = performance.now();
            animateOpacity(startTime);
        }

        return () => {
            document.body.style.overflow = "auto";
            cancelAnimationFrame(animationFrameId);
        };
    }, [isOpen]);

    return (
        <dialog ref={popupRef} className={`${styles['popup']} ${isOpen ? styles['active'] : ''}`} onClick={onClose}>
            <div className={styles['popup-wrap']}>
                <div className={styles['popup-inner']}>
                    {contents}
                </div>
            </div>
            <button type="button" className={styles['popup-close-button']} onClick={onClose}>
                <span className="blind">닫기 버튼</span>
            </button>
        </dialog>
    );
}

export default Popup;
