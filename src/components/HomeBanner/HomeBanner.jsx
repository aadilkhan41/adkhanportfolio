import styles from './styles.module.css';
import profileSticker from '../../assets/profile-sticker.png';
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

function HomeBanner() {
    return (
        <main id='Home' className={styles.main}>
            <div>
                <motion.section className={styles.details} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <motion.h1 variants={fadeUp} custom={1}>I'm Aadil</motion.h1>
                    <motion.p variants={fadeUp} custom={2}>I'm a fresher web developer who enjoys building clean, functional web applications using MERN stack. I’m passionate about learning through hands-on experience and love turning ideas into real, working projects.</motion.p>
                    <motion.span variants={fadeUp} custom={3}><a href="#About">More about me</a></motion.span>
                    <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                        <motion.li variants={fadeUp} custom={2}><a href="https://github.com/aadilkhan41" target='_blank' className={styles.github}></a></motion.li>
                        <motion.li variants={fadeUp} custom={4}><a href="https://leetcode.com/u/Aadil-khan/" target='_blank' className={styles.leetcode}></a></motion.li>
                        <motion.li variants={fadeUp} custom={1}><a href="https://www.linkedin.com/in/aadil-khan-82523a318" target='_blank' className={styles.linkedin}></a></motion.li>
                        <motion.li variants={fadeUp} custom={3}><a href="" className={styles.twitter}></a></motion.li>
                    </motion.ul>
                </motion.section>
                <section className={styles.sticker}>
                    <img src={profileSticker} alt="Aadil's Profile" />
                </section>
            </div>
        </main>
    );
}

export default HomeBanner;