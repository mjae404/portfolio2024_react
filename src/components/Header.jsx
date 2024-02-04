import React from "react";
import styles from "../styles/components/Header.module.scss";

function Header() {

    return (
        <header className={styles['header']}>
            <div className={styles['header-inner']}>
                <div className={styles['header-title-wrap']}>
                    <h1 className={styles['header-title']}>Minjee's Portfolio</h1>
                </div>
                <nav className={styles['header-nav']}>
                    <ul className={styles['header-nav-list']}>
                        <li className={styles['header-nav-item']}>
                            <a href="https://github.com/mjae404 " className={`${styles['header-nav-link']} ${styles.github}`} target="_blank" rel="noreferrer noopener">
                                <span className="blind">Github</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg>
                            </a>
                        </li>
                        <li className={styles['header-nav-item']}>
                            <a href="mailto:mjaedot@gmail.com" className={`${styles['header-nav-link']} ${styles.email}`} target="_blank" rel="noreferrer noopener">
                                <span className="blind">mail</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;