import styles from './styles.module.css';
import Title from '../Title/Title';
import Project from '../../assets/Project';
import RightProject from '../Project/RightProject';
import LeftProject from '../Project/LeftProject';
import JavaScript from '../../assets/JavaScript';
import Html from '../../assets/Html';
import Css from '../../assets/Css';
import Tailwind from '../../assets/Tailwind';
import ReactIcon from '../../assets/ReactIcon';
import ReduxIcon from '../../assets/ReduxIcon';
import FirebaseIcon from '../../assets/FirebaseIcon';
import MySqlIcon from '../../assets/MySqlIcon';
import PhpIcon from '../../assets/PhpIcon';

import cloudstorage from '../../assets/cloud-storage.jpg';
import parkingmangement from '../../assets/parking-mangement.jpg';
import bislericlone from '../../assets/bisleri-clone.png';

import multiengine from '../../assets/multi-engine.jpg';

function Projects() {
    const data = {
        title: 'Curated',
        b: 'Projects',
        p: 'Showcase of my projects that I\'m proud of.',
    };

    const projects = [
        {
            key: 1,
            title: "Parking Parker",
            disc: "Built and deployed a production-ready parking solution with digital ticketing and live vehicle monitoring. JWT-backed receipts enabled verifiable sessions, ensuring secure and scalable parking operations. ",
            cover: parkingmangement,
            tools: [JavaScript, Css, Html, ReactIcon, ReduxIcon, FirebaseIcon],
            link: "https://parking-parker.onrender.com/",
            repo: "https://github.com/aadilkhan41/parking-parker",
        },
        {
            key: 2,
            title: "Cloud Storage",
            disc: "Developed a responsive Google Drive clone using React, Redux Toolkit, Firebase, and Cloudinary. Users can securely upload, preview, share, and download files up to 10GB using REST APIs. Features include real-time search with debouncing, background uploads, and file visualization in both thumbnail and table views. Optimized for seamless cross-device experience.",
            cover: cloudstorage,
            tools: [JavaScript, Css, Html, ReactIcon, ReduxIcon, FirebaseIcon],
            link: "https://google-drive-green-ten.vercel.app/",
            repo: "https://github.com/aadilkhan41/google-drive",
        }, {
            key: 3,
            title: "Bisleri Clone",
            disc: "The Bisleri Clone is a front-end web project designed to replicate 99% of the original Bisleri website, offering a seamless and dynamic user experience. This clone features a visually appealing layout with smooth animations and responsiveness across all devices.",
            cover: bislericlone,
            tools: [JavaScript, Css, Html],
            link: "https://bisleri-ui.vercel.app/",
            repo: "https://github.com/aadilkhan41/bisleri?tab=readme-ov-file",
        }, {
            key: 4,
            title: "Multi Engine",
            disc: "This multi-engine app integrates Google Search, Gemini AI, Wikipedia, and Unsplash APIs to provide web results, AI-generated content, factual knowledge, and stunning images—offering users a powerful, all-in-one tool for research, creativity, and productivity.",
            cover: multiengine,
            tools: [JavaScript, Css, Html, Tailwind],
            link: "https://multi-engine-virid.vercel.app",
            repo: "https://github.com/aadilkhan41/multi_engine",
        }];

    // {
    //     key: 4,
    //     title: "Library Software",
    //     disc: "Developed a responsive ERP web app to manage library using PHP & MySQL with technology used like PWA, SPA, PHP Mailer & PHP Office with AJAX & Vanilla JS.",
    //     cover: bislericlone,
    //     tools: [JavaScript, Css, Html, PhpIcon, MySqlIcon],
    //     link: "#",
    //     repo: "https://github.com/aadilkhan41/LMS",
    // }

    return (
        <article id='Projects' className={styles.article}>
            <Title data={data} Icon={Project} />
            <div className={styles.projects}>
                {projects.map((project) => {
                    if (project.key % 2 == 0) return <LeftProject key={project.key} project={project} />;
                    return <RightProject key={project.key} project={project} />;
                })}
            </div>
        </article>
    );
}

export default Projects;