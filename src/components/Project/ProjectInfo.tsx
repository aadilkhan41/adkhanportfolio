import styles from './styles.module.css';
import ArrowButton from '../ArrowButton/ArrowButton';
import Github from '../../assets/Github';
import LinkButton from '../LinkButton/LinkButton';
import ProjectTools from '../ProjectTools/ProjectTools';
import type { Project } from '../../types';

function ProjectInfo({ project }: { project: Project }) {
    return (
        <>
            {project.tag && <span className={styles.tag}>{project.tag}</span>}
            <h2>{project.title}</h2>
            <p>{project.disc}</p>
            {project.highlights && (
                <ul className={styles.highlights}>
                    {project.highlights.map((point) => <li key={point}>{point}</li>)}
                </ul>
            )}
            <ProjectTools tools={project.tools} />
            {(project.link || project.repo) && (
                <div className={styles.buttons}>
                    {project.link && <ArrowButton title='Visit' link={project.link} />}
                    {project.repo && <LinkButton title='Repository' Icon={Github} link={project.repo} />}
                </div>
            )}
        </>
    );
}

export default ProjectInfo;
