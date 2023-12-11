import styled from "styled-components"
import { SectionTitle } from "../../../components/section-title/SectionTitle"

export function About(){

    return(
        <AboutStyled>
            <SectionTitle fontSize="42px">
                About Me
            </SectionTitle>
            <DescriptionAbout>
                The Generator App is an online tool that helps you to 
                export ready-made templates ready to work as your future website. 
                It helps you to combine slides, panels and other components and 
                export it as a set of static files: HTML/CSS/JS.
            </DescriptionAbout>
        </AboutStyled>    
    )
}

const AboutStyled = styled.section`
    
`

const DescriptionAbout = styled.p`
    
`