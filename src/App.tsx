import './App.css';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Experience } from './layout/sections/experience/Experience';
import { Main } from './layout/sections/main/Main';
import imgDriwing from './assets/img/drawing.svg';
import { Education } from './layout/sections/education/Education';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/sections/projects/Projects';
import imgProject_1 from "./assets/img/img-projects/project-1.jpeg"
import imgProject_2 from "./assets/img/img-projects/project-2.jpeg"
import imgProject_3 from "./assets/img/img-projects/project-3.jpeg"
import imgProject_4 from "./assets/img/img-projects/project-4.jpeg"
import imgProject_5 from "./assets/img/img-projects/project-5.jpeg"
import imgProject_6 from "./assets/img/img-projects/project-6.jpeg"
import { Mail } from './layout/sections/mail/Mail';
import { Footer } from './layout/footer/Footer';
import styled from 'styled-components';

const projectsInfo = [
    {
        imgProject: imgProject_1,
        titleProject: "Project Tile goes here",
        descriptionProject: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        linkPreview: "#",
        linkCode: "#", 
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
    },
    {
        imgProject: imgProject_2,
        titleProject: "Project Tile goes here",
        descriptionProject: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        linkPreview: "#",
        linkCode: "#",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
    },
    {
        imgProject: imgProject_3,
        titleProject: "Project Tile goes here",
        descriptionProject: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        linkPreview: "#",
        linkCode: "#",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
    },
    {
        imgProject: imgProject_4,
        titleProject: "Project Tile goes here",
        descriptionProject: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        linkPreview: "#",
        linkCode: "#",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
    },
    {
        imgProject: imgProject_5,
        titleProject: "Project Tile goes here",
        descriptionProject: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        linkPreview: "#",
        linkCode: "#",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",
    },
    {
        imgProject: imgProject_6,
        titleProject: "Project Tile goes here",
        descriptionProject: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        linkPreview: "#",
        linkCode: "#",
        techStack: "Tech stack : HTML , JavaScript, SASS, React",        
    },
]

const skillsInfo = [
    {name: "html"},
    {name: "css"},
    {name: "react"},
    {name: "gitIcon",
     viewBox: "0 0 24 24"},
    {name: "sass"},
    {name: "js"},
    {name: "redux"},
    {name: "vscode"},
]

function App() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Info>
            <About />
            <Experience />
            <Education />
        </Info>
        <Skills skillsInfo={skillsInfo} />
        <Projects projectsInfo={projectsInfo} />
        <Mail />
        <Footer />
      </div>
    );
}

const Info = styled.div`
    position: relative;
    
    &::before{
        content: "";
        display: block;
        width: 400px;
        height: 600px;
        background-image: url(${imgDriwing});
        background-size: cover;

        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(0, -50%)
    }
`

export default App;