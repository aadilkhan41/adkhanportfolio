import styles from './styles.module.css';
import type { Tool } from '../../types';

interface ProjectToolsProps {
    tools: Tool[];
}

function ProjectTools({tools}: ProjectToolsProps){
    return (
        <div className={styles.tools}>
            <label>Tools: </label>
            {tools.map((Tool, indx)=>{
                if (typeof Tool === 'string') return <span key={indx} className={styles.chip}>{Tool}</span>;
                return <Tool key={indx}/>;
            })}
        </div>
    );
}

export default ProjectTools;
