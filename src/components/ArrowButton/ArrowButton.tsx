import styles from './styles.module.css';
import RightArrow from '../../assets/RightArrow';

interface ArrowButtonProps {
    title: string;
    link: string;
}

function ArrowButton({title, link}: ArrowButtonProps){
    return (
        <span className={styles.button}>
            <a href={link} target='_blank' rel='noreferrer'>{title} <RightArrow/></a>
        </span>
    );
}

export default ArrowButton;
