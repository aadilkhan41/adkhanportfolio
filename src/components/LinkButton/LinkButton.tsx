import styles from './styles.module.css';
import type { IconComponent } from '../../types';

interface LinkButtonProps {
    title: string;
    Icon: IconComponent;
    link: string;
}

function LinkButton({title, Icon, link}: LinkButtonProps){
    return (
        <span className={styles.viewProject}>
            <Icon/>
            <a href={link} target='_blank' rel='noreferrer'>{title}</a>
        </span>
    );
}

export default LinkButton;
