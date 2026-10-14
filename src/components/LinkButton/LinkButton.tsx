import styles from './styles.module.css';

function LinkButton({title, Icon, link}){
    return (
        <span className={styles.viewProject}>
            <Icon/>
            <a href={link}>{title}</a>
        </span>
    );
}

export default LinkButton;