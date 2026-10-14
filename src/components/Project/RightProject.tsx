import styles from './styles.module.css';
import ProjectInfo from './ProjectInfo';
import { motion } from "framer-motion";
import type { Project } from '../../types';

function RightProject({ project }: { project: Project }){
    return (
        <div className={styles.project}>
            <motion.section className={styles.info} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}>
                <ProjectInfo project={project} />
            </motion.section>
            <motion.section className={styles.imgSection} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} viewport={{ once: true, amount: 0.3 }}>
                <img src={project.cover} alt={project.title}/>
            </motion.section>
        </div>
    );
}

export default RightProject;
