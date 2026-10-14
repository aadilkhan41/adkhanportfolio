import styles from './styles.module.css';
import Title from '../Title/Title';
import User from '../../assets/User';
import profile from '../../assets/profile.png';
import type { TitleData } from '../../types';

import { motion, type Variants } from "framer-motion";
import { useState } from 'react';

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

const profileVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const data: TitleData = {
    title: 'About',
    b: 'Me',
    p: 'A story of growth and discovery',
};

function About() {
    const [animate, setAnimate] = useState(false);

    return (
        <article id='About' className={styles.article}>
            <Title data={data} Icon={User} />
            <div className={styles.aboutme}>
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={profileVariant} className={styles.profile}>
                    <div className={animate? styles.firstDiv : ''}></div>
                    <div className={animate? styles.secondDiv : ''}>
                        <img src={profile} alt="Aadil Khan" onLoad={()=>setAnimate(true)}/>
                        <p>Aadil khan</p>
                    </div>
                </motion.section>
                <motion.section className={styles.details} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <motion.h2 variants={fadeUp} custom={1}>Aadil Khan</motion.h2>
                    <motion.p variants={fadeUp} custom={2}>Full Stack Developer · Noida, Uttar Pradesh, India</motion.p>
                    <motion.p variants={fadeUp} custom={3}>Hey, I’m <b>Aadil</b>, a Full Stack Developer with 1+ year of experience building scalable web applications and AI-powered products. I work across the stack with JavaScript, TypeScript, React.js, Node.js, Express.js, Python and FastAPI.</motion.p>
                    <motion.p variants={fadeUp} custom={4}>At <b>Eoxys IT Solution</b> I engineered a microservices SaaS platform with an event-driven architecture, built a RAG pipeline for material catalog retrieval, and brought API response times down to 0.5–1.5 seconds with Redis caching. I enjoy working hands-on with LangChain, LangGraph and LLM integrations to ship practical AI features.</motion.p>
                    <motion.p variants={fadeUp} custom={5}>I transitioned into software from three years as a Quality Control Engineer in telecom, where I managed QA and automation for large-scale fiber network design projects. That background taught me to care about reliability, process and the details.</motion.p>
                    <motion.p variants={fadeUp} custom={6}>I hold a B.Tech in Electrical Engineering from Poornima College of Engineering, Jaipur, and a certification in Problem Solving through C Programming from IIT Kharagpur (NPTEL).</motion.p>
                </motion.section>
            </div>
        </article>
    );
}

export default About;
