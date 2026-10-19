import styles from './styles.module.css';
import Title from '../Title/Title';
import Project from '../../assets/Project';
import RightProject from '../Project/RightProject';
import LeftProject from '../Project/LeftProject';
import JavaScript from '../../assets/JavaScript';
import Html from '../../assets/Html';
import Css from '../../assets/Css';
import ReactIcon from '../../assets/ReactIcon';
import ReduxIcon from '../../assets/ReduxIcon';
import type { Project as ProjectType, TitleData } from '../../types';

import parkingmangement from '../../assets/parking-mangement.jpg';
import bislericlone from '../../assets/bisleri-clone.png';
import jsonflow from '../../assets/jsonflow.png';
import projectbanner from '../../assets/project-banner.jpg';

const data: TitleData = {
    title: 'Curated',
    b: 'Projects',
    p: 'Showcase of my projects that I\'m proud of.',
};

const projects: ProjectType[] = [
    {
        key: 1,
        title: "Smart Measure",
        tag: "Client Project",
        disc: "Smart Measure is an AI-powered measurement and material ordering platform, live in production on web and mobile. Teams describe what they need, typed or spoken, and the AI turns it into a structured cut or site material order matched against the material catalog, instead of filling in long order forms by hand.",
        highlights: [
            "Architected a LangGraph workflow that routes each request to a cut or site material order, splits mixed requests and retries poor matches.",
            "Built a LangChain pipeline that converts spoken requests (speech to text) into structured data.",
            "Engineered async FastAPI microservices for AI-driven measurement and material analysis, integrated with the Node.js backend.",
            "Cut React.js load time from 4s to 0.7s through code splitting.",
            "Containerized services with Docker and deployed across AWS EC2 and Lambda, with S3 for storage. Shipped a React Native mobile app.",
        ],
        cover: projectbanner,
        tools: [ReactIcon, "Next.js", "Node.js", "Python", "FastAPI", "LangChain", "PostgreSQL", "AWS", "Docker"],
    }, {
        key: 2,
        title: "ParkCaro",
        disc: "ParkCaro is parking management software that replaces paper receipts with digital tickets. Each vehicle gets a link and QR code at entry, and the ticket is settled at exit. Thermal receipts can't be recycled and handwritten ones are easy to duplicate; digital tickets solve both. It supports paid parkings (per-category fees, hourly charges, GST) and residential parkings with flats management.",
        highlights: [
            "Number plate recognition from the camera and a QR scanner for exit.",
            "Admin dashboard with weekly visitors, daily revenue and revenue by vehicle type.",
            "Live receipts and notifications over Socket.IO, admin and keeper roles with JWT cookies.",
            "Installable as a PWA, with email OTP password reset.",
        ],
        cover: parkingmangement,
        tools: [ReactIcon, ReduxIcon, JavaScript, "Node.js", "Express", "MongoDB", "Socket.IO"],
        link: "https://parkcaro-l5ps.onrender.com/",
        repo: "https://github.com/aadilkhan41/parking-parker",
    }, {
        key: 3,
        title: "JSONFlow",
        disc: "JSONFlow is a JSON visualizer that turns raw JSON into an interactive tree. Instead of scrolling through deeply nested text, you paste or upload JSON and explore it as a node graph, making large API responses and config files easy to understand and debug.",
        highlights: [
            "Real-time search by path (e.g. $.contact.email) with live JSON validation.",
            "Copy the path of any node and download the graph as an image.",
            "Zoom in/out, fit to screen and dark/light view modes.",
        ],
        cover: jsonflow,
        tools: [ReactIcon, JavaScript, Css, "React Flow"],
        link: "https://json-flow-ivory.vercel.app/",
        repo: "https://github.com/aadilkhan41/JSONFlow",
    }, {
        key: 4,
        title: "Bisleri Clone",
        disc: "Bisleri Clone is a recreation of the Bisleri website UI, built by a four-person team during a Geekathon event. The goal was to replicate the original site's design and functionality with full responsiveness across mobile, tablet and desktop.",
        highlights: [
            "Led the team as Team Leader, coordinating the work across four developers.",
            "Built the landing page and brand section with extra interactivity and design elements.",
            "Interactive features in vanilla JavaScript: modals, sliding menu and a chat bot.",
        ],
        cover: bislericlone,
        tools: [JavaScript, Css, Html],
        link: "https://bisleri-ui.vercel.app/",
        repo: "https://github.com/aadilkhan41/bisleri",
    }];

function Projects() {
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
