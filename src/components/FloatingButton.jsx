import React, { useState, useEffect } from 'react';
import styles from "../styles/components/FloatingButton.module.scss";

const FloatingButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
    document.getElementById('floatArea').classList.toggle(styles['dark'], isDarkMode);
    document.getElementById('floatArea').classList.toggle(styles['light'], !isDarkMode);
  }, [isDarkMode]);

  return (
    <div id="floatArea" className={styles['floating-button-container']}>
        <button type="button"
      className={`${styles['floating-button']} ${styles.top}`}
      onClick={scrollToTop}
      style={{ opacity: isVisible ? 1 : 0 }}>
            <span className="blind">모드 변경</span>
            </button>
        <button type="button" className={`${styles['floating-button']} ${styles.mode}`} onClick={toggleTheme}>
        <span className="blind">모드 변경</span>
        </button>
    </div>
  );
};

export default FloatingButton;
