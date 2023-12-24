import styled from "styled-components"
import { SectionTitle } from "../../../components/section-title/SectionTitle"
import { Container } from "../../../components/container/Container"

export function About(){

    return (
      <Container>
        <AboutStyled>
          <SectionTitle fontSize="42px" marginBottom="38px">
            About Me
          </SectionTitle>
          <DescriptionAbout>
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </DescriptionAbout>
        </AboutStyled>
      </Container>
    );
}

const AboutStyled = styled.section`
    margin-bottom: 38px;
    width: 60%;
`

const DescriptionAbout = styled.p`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
`