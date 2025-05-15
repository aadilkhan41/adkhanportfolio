import { useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function NavigationBar() {
    const [activLink, setActiveLink] = useState("Home");
    return (
        <motion.header className={styles.header} initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
            <nav>
                {["Home", "About", "Projects", "Skills", "Contact"].map((link) => {
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