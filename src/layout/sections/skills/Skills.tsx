import styled from "styled-components";
import { SectionTitle } from "../../../components/section-title/SectionTitle";
import { SectionSubtitle } from "../../../components/section-subtitle/SectionSubtitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/container/Container";

export function Skills() {

    return (
      <SectionSkills>
        <Container>
          <SectionTitle fontSize="48px" textAlign="center" margin="0 0 50px ">
            My Tech Stack
          </SectionTitle>
          <SectionSubtitle>
            Technologies I’ve been working with recently
          </SectionSubtitle>
          <Grid>
            <Skill iconId="html" />
            <Skill iconId="css" />
            <Skill iconId="react" />
            <Skill iconId="gitIcon" viewBox="0 0 24 24" />
            <Skill iconId="sass" />
            <Skill iconId="js" />
            <Skill iconId="redux" />
            <Skill iconId="vscode" />
          </Grid>
        </Container>
      </SectionSkills>
    );
}

const SectionSkills = styled.section`
    margin-bottom: 215px;
`
const Grid =styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 150px);
    justify-content: center;
    justify-items: center;
`