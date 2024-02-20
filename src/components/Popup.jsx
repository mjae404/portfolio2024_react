import React, { useEffect, useRef } from "react";
import styles from "../styles/components/Popup.module.scss";

function Popup({ contents, onClose, isOpen, popupId }) {
    const popupRef = useRef(null);

    useEffect(() => {
        const popupElement = popupRef.current;

        let animationFrameId;

        const animateOpacity = (timestamp) => {
            const duration = 5000;
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
        <div ref={popupRef} className={`${styles['popup']} ${isOpen ? styles['active'] : ''}`} aria-labelledby={popupId} aria-live="polite">
            <div className={styles['popup-dimmed']} onClick={onClose}></div>
            <div className={styles['popup-wrap']}>
                <div className={styles['popup-inner']}>
                    {contents}
                </div>
            </div>
            <button type="button" className={styles['popup-close-button']} onClick={onClose}>
                <span className="blind">닫기</span>
            </button>
        </div>
    );
}

export default Popup;
