import styles from './styles.module.css';
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

function Title({data, Icon}){
    return (
        <motion.div className={styles.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
            <div><Icon/></div>
            <h1>{data.title} <b>{data.b}</b></h1>
            <p>{data.p}</p>
        </motion.div>
    );
}

export default Title;