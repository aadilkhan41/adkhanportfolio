import {ReactIcon} from '../assets/techstack/ReactIcon';
import {TailwindIcon} from '../assets/techstack/TailwindIcon';
import {JavascriptIcon} from '../assets/techstack/JavascriptIcon';
import {CssIcon} from '../assets/techstack/CssIcon';
import {HtmlIcon} from '../assets/techstack/HtmlIcon';
import {VscodeIcon} from '../assets/techstack/VscodeIcon';
import {PostmanIcon} from '../assets/techstack/PostmanIcon';
import {ReduxIcon} from '../assets/techstack/ReduxIcon';
import {GitIcon} from '../assets/techstack/GitIcon';
import {GithubIcon} from '../assets/techstack/GithubIcon';
import {FirebaseIcon} from '../assets/techstack/FirebaseIcon';
import {NodeIcon} from '../assets/techstack/NodeIcon';
import {MongodbIcon} from '../assets/techstack/MongodbIcon';
import {TypescriptIcon} from '../assets/techstack/TypescriptIcon';
import { JestIcon } from '../assets/techstack/JestIcon';
import { ExpressIcon } from '../assets/techstack/ExpressIcon';
import type { Experience, Skill, SkillGroup } from '../types';
import eoxysLogo from '../assets/eoxys-logo.png';
import geeksterLogo from '../assets/geekster-logo.jpg';
import congruexLogo from '../assets/congruex-logo.jpg';

export const iconArr: Skill[] = [
    {
        Icon: JavascriptIcon,
        title: "JavaScript"
    },{
        Icon: TypescriptIcon,
        title: "TypeScript"
    },{
        Icon: ReactIcon,
        title: "React.js"
    },{
        Icon: ReduxIcon,
        title: "Redux"
    },{
        Icon: NodeIcon,
        title: "Node.js"
    },{
        Icon: ExpressIcon,
        title: "Express.js"
    },{
        Icon: MongodbIcon,
        title: "MongoDB"
    },{
        Icon: FirebaseIcon,
        title: "Firebase"
    },{
        Icon: TailwindIcon,
        title: "Tailwind"
    },{
        Icon: HtmlIcon,
        title: "HTML"
    },{
        Icon: CssIcon,
        title: "CSS"
    },{
        Icon: JestIcon,
        title: "Jest"
    },{
        Icon: GitIcon,
        title: "Git"
    },{
        Icon: GithubIcon,
        title: "GitHub"
    },{
        Icon: PostmanIcon,
        title: "Postman"
    },{
        Icon: VscodeIcon,
        title: "VS Code"
    },
];

export const skillGroups: SkillGroup[] = [
    {
        category: "Languages",
        items: ["JavaScript", "TypeScript", "SQL", "Python"],
    },{
        category: "Frontend",
        items: ["React.js", "Next.js", "React Native", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
    },{
        category: "Backend",
        items: ["Node.js", "Express.js", "FastAPI", "REST API", "Microservices", "JWT", "WebSockets"],
    },{
        category: "AI / ML",
        items: ["LangGraph", "LangChain", "RAG", "LLM Integration", "Prompt Engineering", "Generative AI"],
    },{
        category: "Databases & Caching",
        items: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    },{
        category: "Cloud & DevOps",
        items: ["AWS (S3, EC2, Lambda)", "Docker", "CI/CD", "Vercel", "Render"],
    },{
        category: "Tools & Core",
        items: ["Linux", "Git", "GitHub", "Unit Testing", "Cursor", "DSA", "Agile"],
    },
];

export const experiences: Experience[] = [
    {
        company: "Eoxys IT Solution",
        logo: eoxysLogo,
        role: "Full Stack Developer",
        location: "Jaipur",
        period: "Sept 2025 – Sept 2026",
        points: [
            "Engineered a microservices SaaS platform with an event-driven architecture.",
            "Built a RAG pipeline to retrieve relevant material catalog rows, improving accuracy and reducing token usage.",
            "Reduced API response times to 0.5–1.5 seconds with Redis caching and aggregation pipelines.",
            "Designed reusable API middleware for validation and error handling, reducing bugs by 20%.",
            "Implemented JWT authentication and role-based authorization.",
            "Contributed to backend system design, schema design, API scalability and performance engineering.",
        ],
    },{
        company: "Geekster",
        logo: geeksterLogo,
        role: "MERN Stack Intern",
        location: "Remote",
        period: "Jan 2025 – June 2025",
        points: [
            "Developed a responsive internal dashboard using React.js, TypeScript and Material UI.",
            "Developed 8+ RESTful APIs using Node.js, Express.js and MongoDB for an internal business dashboard.",
            "Worked on API design, database operations, error handling and backend debugging.",
        ],
    },{
        company: "Congruex Asia Pacific",
        logo: congruexLogo,
        role: "Quality Control Engineer",
        location: "Remote",
        period: "March 2021 – June 2024",
        points: [
            "Managed quality assurance and automation processes for large-scale fiber network design projects.",
        ],
    },
];
