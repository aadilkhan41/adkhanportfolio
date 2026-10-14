import styles from './styles.module.css';
import Title from '../Title/Title';
import Briefcase from '../../assets/Briefcase';
import { experiences } from '../../data/data';
import type { TitleData } from '../../types';
import { motion } from "framer-motion";

const data: TitleData = {
    title: 'Work',
    b: 'Experience',
    p: 'Where I\'ve built and shipped',
};

function Experience() {
    return (
        <article id='Experience' className={styles.article}>
            <Title data={data} Icon={Briefcase} />
            <div className={styles.timeline}>
                {experiences.map((job, indx) => (
                    <motion.section key={job.company} className={styles.job} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: indx * 0.1 }} viewport={{ once: true, amount: 0.3 }}>
                        <div className={styles.header}>
                            <div className={styles.company}>
                                <img src={job.logo} alt={`${job.company} logo`} />
                                <div>
                                    <h2>{job.role}</h2>
                                    <h3>{job.company}</h3>
                                </div>
                            </div>
                            <span>{job.period} · {job.location}</span>
                        </div>
                        <ul>
                            {job.points.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                    </motion.section>
                ))}
            </div>
        </article>
    );
}

export default Experience;
