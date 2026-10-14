import styles from './styles.module.css';
import Title from '../Title/Title';
import ContactUs from '../../assets/ContactUs';
import Email from '../../assets/Email';
import Linkedin from '../../assets/Linkedin';
import type { TitleData } from '../../types';

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
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

const data: TitleData = {
    title: 'Contact',
    b: 'Me',
    p: 'Feel free to connect with me',
};

function Contact(){
    return (
        <article id='Contact' className={styles.article}>
            <Title data={data} Icon={ContactUs}/>
            <motion.div className={styles.contactus} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <motion.p variants={fadeUp} custom={1}>I’m always open to new opportunities, whether it's collaborating on a project, exploring full stack or AI engineering roles, or simply connecting with like-minded people. If you have something in mind or just want to say hello, feel free to reach out. <b>I’d love to hear from you!</b></motion.p>
                <motion.section variants={fadeUp} custom={2}>
                    <span><a href="mailto:aadilkhan3007@gmail.com" title="aadilkhan3007@gmail.com"><Email/></a></span>
                    <span><a href="https://www.linkedin.com/in/eraadilkhan" target='_blank' rel='noreferrer' title="LinkedIn"><Linkedin/></a></span>
                </motion.section>
            </motion.div>
        </article>
    );
}

export default Contact;
