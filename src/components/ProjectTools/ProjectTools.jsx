import styles from './styles.module.css';

function ProjectTools({tools}){
    return (
        <div className={styles.tools}>
            <label>Tools: </label>
            {tools.map((Tool, indx)=>{
                return <Tool key={indx}/>;
            })}
        </div>
    );
}

export default ProjectTools;