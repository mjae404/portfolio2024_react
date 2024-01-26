import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/components/Navigation.module.scss";
import {sectionIds} from "../assets/data/data";

function Navigation() {
    const [activeItem, setActiveItem] = useState(null);
    const navigationRef = useRef(null);

    // Define the sections and their associated IDs

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveItem(entry.target.id);
                }
            });
        }, options);

        // Observe each section
        sectionIds.forEach((id) => {
            const target = document.getElementById(id);
            if (target) {
                observer.observe(target);
            }
        });

        return () => {
            // Cleanup the observer when the component is unmounted
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navigation} ref={navigationRef}>
            <ul className={styles['navigation-list']}>
                {sectionIds.map((id) => (
                    <li
                        key={id}
                        className={`${styles['navigation-item']} ${activeItem === id ? styles.active : ''}`}
                    >
                        <button
                            type="button"
                            className={styles['navigation-button']}
                            onClick={() => scrollToSection(id)}
                        >
                            {id}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
