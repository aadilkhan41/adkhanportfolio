import styles from './styles.module.css';
import { motion } from "framer-motion";
import desktop from '../../assets/parkcaro-desktop.png';
import mobile from '../../assets/parkcaro-mobile.jpg';

function ProjectShowcase() {
    return (
        <figure className={styles.showcase}>
            <motion.figcaption initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <a href='#Projects'>
                    <small>Featured project</small>
                    <span><b>ParkCaro</b> · Parking management software</span>
                </a>
            </motion.figcaption>
            <motion.span className={styles.browser} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}>
                <span className={styles.tabs}>
                    <span className={styles.lights}><i /><i /><i /></span>
                    <span className={styles.tab}><i className={styles.favicon} />ParkCaro · Dashboard<small>×</small></span>
                    <span className={styles.newTab}>+</span>
                </span>
                <span className={styles.bar}>
                    <span className={styles.nav}>
                        <svg viewBox='0 0 24 24'><path d='M15 18l-6-6 6-6' /></svg>
                        <svg viewBox='0 0 24 24'><path d='M9 18l6-6-6-6' /></svg>
                        <svg viewBox='0 0 24 24'><path d='M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7' /></svg>
                    </span>
                    <a className={styles.url} href='https://parkcaro.onrender.com/' target='_blank' rel='noreferrer'>
                        <svg viewBox='0 0 24 24'><rect x='5' y='11' width='14' height='10' rx='2' /><path d='M8 11V7a4 4 0 0 1 8 0v4' /></svg>
                        <span><em>https://</em>parkcaro.onrender.com<em>/dashboard</em></span>
                        <b>Live</b>
                    </a>
                    <svg className={styles.star} viewBox='0 0 24 24'><path d='M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z' /></svg>
                </span>
                <img src={desktop} alt='ParkCaro admin dashboard on desktop' />
            </motion.span>
            <motion.span className={styles.phone} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}>
                <img src={mobile} alt='ParkCaro dashboard on mobile' />
            </motion.span>
        </figure>
    );
}

export default ProjectShowcase;
