import styles from './styles.module.css';
import ArrowButton from '../ArrowButton/ArrowButton';
import Github from '../../assets/Github';
import LinkButton from '../LinkButton/LinkButton';
import ProjectTools from '../ProjectTools/ProjectTools';
import { motion } from "framer-motion";

function RightProject({project}){    
    return (
        <div className={styles.project}>
            <motion.section className={styles.info} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.3 }}>
                <h2>{project.title}</h2>
                <p>{project.disc}</p>
                <ProjectTools tools={project.tools}/>
                <div className={styles.buttons}>
                    <ArrowButton title='Visit' link={project.link}/>
                    <LinkButton title='Repository' Icon={Github} link={project.repo}/>
                </div>
            </motion.section>
            <motion.section className={styles.imgSection} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} viewport={{ once: true, amount: 0.3 }}>
                <img src={project.cover} alt={project.title}/>
            </motion.section>
        </div>
    );
}

export default RightProject;