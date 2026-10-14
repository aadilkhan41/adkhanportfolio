import styles from './styles.module.css';

function AuroraBackground() {
    return (
        <div className={styles.background} aria-hidden='true'>
            <div className={styles.grid} />
            <span className={`${styles.blob} ${styles.teal}`} />
            <span className={`${styles.blob} ${styles.yellow}`} />
            <span className={`${styles.blob} ${styles.orange}`} />
        </div>
    );
}

export default AuroraBackground;
