import styles from './styles.module.css';
import Title from '../Title/Title';

import Skill from '../../assets/Skill';
import {ReactIcon} from '../../assets/techstack/ReactIcon';
import {TailwindIcon} from '../../assets/techstack/TailwindIcon';
import {PhpIcon} from '../../assets/techstack/PhpIcon';
import {JavascriptIcon} from '../../assets/techstack/JavascriptIcon';
import {CssIcon} from '../../assets/techstack/CssIcon';
import {HtmlIcon} from '../../assets/techstack/HtmlIcon';
import {MysqlIcon} from '../../assets/techstack/MysqlIcon';
import {VscodeIcon} from '../../assets/techstack/VscodeIcon';
import {JavaIcon} from '../../assets/techstack/JavaIcon';
import {PwaIcon} from '../../assets/techstack/PwaIcon';
import {PostmanIcon} from '../../assets/techstack/PostmanIcon';
import {JsonIcon} from '../../assets/techstack/JsonIcon';
import {ReduxIcon} from '../../assets/techstack/ReduxIcon';
import {GitIcon} from '../../assets/techstack/GitIcon';
import {GithubIcon} from '../../assets/techstack/GithubIcon';
import {FirebaseIcon} from '../../assets/techstack/FirebaseIcon';
import {NodeIcon} from '../../assets/techstack/NodeIcon';
import {MongodbIcon} from '../../assets/techstack/MongodbIcon';
import {TypescriptIcon} from '../../assets/techstack/TypescriptIcon';

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const iconArr = [
    {
        Icon: JavascriptIcon,
        title: "JavaScript"
    },{
        Icon: HtmlIcon,
        title: "HTML"
    },{
        Icon: CssIcon,
        title: "CSS"
    },{
        Icon: ReactIcon,
        title: "React.js"
    },{
        Icon: ReduxIcon,
        title: "Redux"
    },{
        Icon: PwaIcon,
        title: "PWA"
    },{
        Icon: TailwindIcon,
        title: "Tailwind"
    },{
        Icon: FirebaseIcon,
        title: "Firebase"
    },{
        Icon: GitIcon,
        title: "Git"
    },{
        Icon: GithubIcon,
        title: "GitHub"
    },{
        Icon: VscodeIcon,
        title: "VS Code"
    },{
        Icon: PostmanIcon,
        title: "Postman"
    },{
        Icon: JsonIcon,
        title: "JSON"
    },{
        Icon: MysqlIcon,
        title: "MySQL"
    },{
        Icon: JavaIcon,
        title: "Java"
    },{
        Icon: PhpIcon,
        title: "PHP"
    },
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
            <motion.div className={styles.skills} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                {iconArr.map(({ Icon, title },indx)=>{
                    return <motion.span key={indx} title={title} variants={fadeUp} custom={indx}><Icon/></motion.span>;
                })}
            </motion.div>
        </article>
    );
}

export default Skills;