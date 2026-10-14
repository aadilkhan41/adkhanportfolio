import styles from './styles.module.css';
import RightArrow from '../../assets/RightArrow';

function ArrowButton({title, link}){
    return (
        <span className={styles.button}>
            <a href={link}>{title} <RightArrow/></a>
        </span>
    );
}

export default ArrowButton;