import styles from './styles.module.css';
import Title from '../Title/Title';
import Skill from '../../assets/Skill';
import { motion, type Variants } from "framer-motion";
import { iconArr, skillGroups } from '../../data/data';
import type { IconComponent, TitleData } from '../../types';

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

const data: TitleData = {
    title: 'My',
    b: 'Skills',
    p: 'What I Bring to the Table',
};

const aliases: Record<string, string> = {
    "Tailwind CSS": "Tailwind",
    "HTML5": "HTML",
    "CSS3": "CSS",
};

const icons = new Map<string, IconComponent>(iconArr.map(({ title, Icon }) => [title, Icon]));

function Skills() {
    return (
        <article id='Skills' className={styles.article}>
            <Title data={data} Icon={Skill} />
            <motion.div className={styles.groups} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                {skillGroups.map(({ category, items }, indx) => (
                    <motion.section key={category} variants={fadeUp} custom={indx * 0.3}>
                        <header>
                            <span className={styles.index}>{String(indx + 1).padStart(2, '0')}</span>
                            <h3>{category}</h3>
                            <span className={styles.count}>{items.length}</span>
                        </header>
                        <ul>
                            {items.map((item) => {
                                const Icon = icons.get(aliases[item] ?? item);
                                return (
                                    <li key={item}>
                                        {Icon && <Icon />}
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.section>
                ))}
            </motion.div>
        </article>
    );
}

export default Skills;
