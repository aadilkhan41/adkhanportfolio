import styles from './styles.module.css';
import { motion, type Variants } from "framer-motion";
import ProjectShowcase from '../ProjectShowcase/ProjectShowcase';

const fadeUp: Variants = {
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

function Intro() {
    return (
        <main id='Home' className={styles.main}>
            <div>
                <motion.section className={styles.details} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <motion.p className={styles.badge} variants={fadeUp} custom={0.5}>Open to full stack & AI engineering roles</motion.p>
                    <motion.h1 variants={fadeUp} custom={1}>I'm Aadil</motion.h1>
                    <motion.h2 className={styles.role} variants={fadeUp} custom={1.5}>Full Stack Developer · Noida, India</motion.h2>
                    <motion.p variants={fadeUp} custom={2}>I build scalable web applications and AI-powered products with TypeScript, React.js, Node.js, Python and FastAPI, from RAG pipelines and LangGraph workflows to fast, clean user interfaces.</motion.p>
                    <motion.p className={styles.extra} variants={fadeUp} custom={2.5}>Most recently at Eoxys IT Solution, I shipped Smart Measure, an AI measurement and ordering platform live on web and mobile.</motion.p>
                    <motion.dl className={styles.stats} variants={fadeUp} custom={3}>
                        <dt>1+ yr</dt><dd>Full stack development</dd>
                        <dt>3 yrs</dt><dd>QA & automation engineering</dd>                    </motion.dl>
                    <motion.nav className={styles.actions} variants={fadeUp} custom={3.5}>
                        <a href="#Projects" className={styles.primary}>View projects</a>
                        <a href="#About">More about me</a>
                    </motion.nav>
                    <motion.ul initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                        <motion.li variants={fadeUp} custom={2}><a href="https://github.com/aadilkhan41" target='_blank' rel='noreferrer' className={styles.github}></a></motion.li>
                        <motion.li variants={fadeUp} custom={3}><a href="https://leetcode.com/u/Aadil-khan/" target='_blank' rel='noreferrer' className={styles.leetcode}></a></motion.li>
                        <motion.li variants={fadeUp} custom={1}><a href="https://www.linkedin.com/in/eraadilkhan" target='_blank' rel='noreferrer' className={styles.linkedin}></a></motion.li>
                    </motion.ul>
                </motion.section>
                <section className={styles.showcase}><ProjectShowcase/></section>
            </div>
        </main>
    );
}

export default Intro;
