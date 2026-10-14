import styles from './styles.module.css';
import Title from '../Title/Title';
import User from '../../assets/User';
import geekster from '../../assets/geekster.svg';
import profile from '../../assets/profile.png';

import { motion } from "framer-motion";
import { useState } from 'react';

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

const profileVariant = {
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

function About() {
    const [animate, setAnimate] = useState(false);
    const data = {
        title: 'About',
        b: 'Me',
        p: 'A story of growth and discovery',
    };

    return (
        <article id='About' className={styles.article}>
            <Title data={data} Icon={User} />
            <div className={styles.aboutme}>
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={profileVariant} className={styles.profile}>
                    <div className={animate? styles.firstDiv : ''}></div>
                    <div className={animate? styles.secondDiv : ''}>
                        <img src={profile} alt="Aadil Khan" onLoad={()=>setAnimate(!animate)}/>
                        <p>Aadil khan</p>
                    </div>
                </motion.section>
                <motion.section className={styles.details} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <motion.h2 variants={fadeUp} custom={1}>Aadil Khan</motion.h2>
                    <motion.p variants={fadeUp} custom={2}>Full-stack Intern at <a href="https://www.geekster.in/"><span>Geekster <img src={geekster} alt="Geekster" /></span></a></motion.p>
                    <motion.p variants={fadeUp} custom={3}>Hey, I’m <b>Aadil</b> — a fresher Software Engineer passionate about full-stack development and building real-world applications using the MERN stack.</motion.p>
                    <motion.p variants={fadeUp} custom={4}>Coming from a telecom background, I made the switch to tech out of a genuine love for problem-solving and creating useful digital experiences. I’m particularly drawn to the React ecosystem and enjoy turning ideas into clean, responsive interfaces.</motion.p>
                    <motion.p variants={fadeUp} custom={5}>As part of my learning journey, I’ve been diving into hands-on projects and continuously improving my skills in both front-end and back-end development. I’m also a big fan of writing clean, maintainable code and understanding how things work under the hood.</motion.p>
                    <motion.p variants={fadeUp} custom={6}>Even though I’m at the beginning of my professional career, I bring curiosity, consistency, and a strong desire to grow as a developer. I’m always looking to learn, collaborate, and contribute to meaningful projects.</motion.p>
                </motion.section>
            </div>
        </article>
    );
}

export default About;