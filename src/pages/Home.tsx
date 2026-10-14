import NavigationBar from '../components/NavigationBar/NavigationBar';
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

function Home(){
    return <>
        <NavigationBar/>
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
    </>;
}

export default Home;
