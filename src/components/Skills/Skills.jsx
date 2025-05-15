import styles from './styles.module.css';
import Title from '../Title/Title';
import Skill from '../../assets/Skill';
import ReactIcon from '../../assets/techstack/ReactIcon';
import TailwindIcon from '../../assets/techstack/TailwindIcon';
import PhpIcon from '../../assets/techstack/PhpIcon';
import JavascriptIcon from '../../assets/techstack/JavascriptIcon';
import CssIcon from '../../assets/techstack/CssIcon';
import HtmlIcon from '../../assets/techstack/HtmlIcon';
import MysqlIcon from '../../assets/techstack/MysqlIcon';
import VscodeIcon from '../../assets/techstack/VsCodeIcon';
import JavaIcon from '../../assets/techstack/JavaIcon';
import TypescriptIcon from '../../assets/techstack/TypescriptIcon';
import FirebaseIcon from '../../assets/techstack/FirebaseIcon';
import PwaIcon from '../../assets/techstack/PwaIcon';
import PostmanIcon from '../../assets/techstack/PostmanIcon';
import JsonIcon from '../../assets/techstack/JsonIcon';
import ReduxIcon from '../../assets/techstack/ReduxIcon';
import GitIcon from '../../assets/techstack/GitIcon';
import GithubIcon from '../../assets/techstack/GithubIcon';
import NodeIcon from '../../assets/techstack/NodeIcon';
import MongodbIcon from '../../assets/techstack/MongodbIcon';

import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const iconArr = [
    [<JavascriptIcon />, "JavaScript"],
    [<HtmlIcon />, "HTML"],
    [<CssIcon />, "CSS"],
    [<ReactIcon />, "React.js"],
    [<ReduxIcon />, "Redux"],
    [<PwaIcon />, "PWA"],
    [<TailwindIcon />, "Tailwind"],
    [<TypescriptIcon />, "TypeScript"],
    [<FirebaseIcon />, "Firebase"],
    [<GitIcon />, "Git"],
    [<GithubIcon />, "GitHub"],
    [<VscodeIcon />, "VS Code"],
    [<PostmanIcon />, "Postman"],
    [<JsonIcon />, "JSON"],
    [<MysqlIcon />, "MySQL"],
    [<JavaIcon />, "Java"],
    [<PhpIcon />, "PHP"]
];

function Skills() {
    const data = {
        title: 'My',
        b: 'Skills',
        p: 'What I Bring to the Table',
    };

    return (
        <article id='Skills' className={styles.article}>
            <Title data={data} Icon={Skill} />
            <motion.div className={styles.skills} variants={container} initial="hidden" animate="show">
                {[...Array(4)].map((_, i) => (
                    <section key={i}>
                        {iconArr.slice(i * 5, i * 5 + 5)
                            .map(([Icon, title], index) => (
                                <motion.span key={index} title={title} variants={item}>
                                    {Icon}
                                </motion.span>
                            ))}
                    </section>
                ))}
            </motion.div>
        </article>
    );
}

export default Skills;