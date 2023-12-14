import './App.css';
import { FlexWrapper } from './components/flex-wrapper/FlexWrapper';
import { Header } from './layout/header/Header';
import { About } from './layout/sections/about/About';
import { Experience } from './layout/sections/experience/Experience';
import { Main } from './layout/sections/main/Main';
import imgDrawing from './assets/img/drawing.svg'
import { Education } from './layout/sections/education/Education';
import { Skills } from './layout/skills/Skills';

function App() {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;