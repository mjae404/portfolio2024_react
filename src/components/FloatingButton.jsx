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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    document.getElementById('floatArea').classList.toggle(styles['dark'], isDarkMode);
    document.getElementById('floatArea').classList.toggle(styles['light'], !isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateThemeMode = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', updateThemeMode);

    return () => {
      mediaQuery.removeEventListener('change', updateThemeMode);
    };
  }, []);

  return (
    <div id="floatArea" className={styles['floating-button-container']}>
      <button
        type="button"
        className={`${styles['floating-button']} ${styles.top} ${isVisible ? "" : styles['hidden']}`}
        onClick={scrollToTop}>
        <span className="blind">위로 가기</span>
      </button>
      <button
        type="button"
        className={`${styles['floating-button']} ${styles.mode}`}
        onClick={toggleTheme}
      >
        <span className="blind">모드 변경</span>
      </button>
    </div>
  );
};

export default FloatingButton;