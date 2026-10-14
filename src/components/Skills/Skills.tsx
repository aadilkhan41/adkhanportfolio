import styles from './styles.module.css';
import Title from '../Title/Title';
import Skill from '../../assets/Skill';
import { motion } from "framer-motion";
import { iconArr } from '../../data/data';

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

function Skills() {
    const data = {
        title: 'My',
        b: 'Skills',
        p: 'What I Bring to the Table',
    };

    return (
        <article id='Skills' className={styles.article}>
            <Title data={data} Icon={Skill} />
            <motion.div className={styles.skills} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                {iconArr.map(({ Icon, title },indx)=>{
                    return <motion.span key={indx} title={title} variants={fadeUp} custom={indx}><Icon/></motion.span>;
                })}
            </motion.div>
        </article>
    );
}

export default Skills;