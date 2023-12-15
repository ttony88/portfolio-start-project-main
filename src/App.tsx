import './App.css';
import { FlexWrapper } from './components/flex-wrapper/FlexWrapper';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Experience } from './layout/sections/experience/Experience';
import { Main } from './layout/sections/main/Main';
import imgDrawing from './assets/img/drawing.svg'
import { Education } from './layout/sections/education/Education';
import { Skills } from './layout/skills/Skills';
import { Projects } from './layout/sections/porjects/Projects';
import imgProject_1 from "./assets/img/img-projects/project-1.jpeg"
import imgProject_2 from "./assets/img/img-projects/project-2.jpeg"
import imgProject_3 from "./assets/img/img-projects/project-3.jpeg"
import imgProject_4 from "./assets/img/img-projects/project-4.jpeg"
import imgProject_5 from "./assets/img/img-projects/project-5.jpeg"
import imgProject_6 from "./assets/img/img-projects/project-6.jpeg"
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

function App() {
    return (
        <div className="App">
            <Container>
                <Header />
                <Main />
                <FlexWrapper>
                <div>
                    <About />
                    <Experience />
                    <Education />
                </div>
                <svg width="621" height="1019" viewBox="0 0 621 1019" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${imgDrawing}#${"driwing"}`} />
                </svg>
                </FlexWrapper>
                <Skills />
                <Projects projectsInfo={projectsInfo}/>
            </Container>
            
        </div>
    );
}

const Container = styled.div`
    width: 1204px;
    margin: 0 auto;
`

export default App;