import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const links = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

function NavigationBar() {
    const [activLink, setActiveLink] = useState("Home");

    useEffect(() => {
        let frame = 0;
        const updateActiveLink = () => {
            const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            if (atBottom) {
                setActiveLink(links[links.length - 1]);
                return;
            }
            const marker = window.innerHeight * 0.4;
            let current = links[0];
            for (const link of links) {
                const section = document.getElementById(link);
                if (section && section.getBoundingClientRect().top <= marker) current = link;
            }
            setActiveLink(current);
        };
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(updateActiveLink);
        };
        updateActiveLink();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <motion.header className={styles.header} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
            <nav>
                {links.map((link) => {
                    return (
                    <span key={link}>
                        <a className={link === activLink ? styles.active : ""} href={`#${link}`} onClick={() => { setActiveLink(link) }}>{link}</a>
                    </span>);
                })}
            </nav>
        </motion.header>
    );
}

export default NavigationBar;
