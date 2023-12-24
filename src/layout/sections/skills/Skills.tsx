import styled from "styled-components";
import { SectionTitle } from "../../../components/section-title/SectionTitle";
import { SectionSubtitle } from "../../../components/section-subtitle/SectionSubtitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/container/Container";
import { GridWrapper } from "../../../components/grid-wrapper/GridWrapper";

export function Skills() {

    return (
      <SectionSkills>
        <Container>
          <SectionTitle fontSize="48px" textAlign="center" marginBottom="50px ">
            My Tech Stack
          </SectionTitle>
          <SectionSubtitle>
            Technologies I’ve been working with recently
          </SectionSubtitle>
          <GridWrapper columnsRepeat="4, 1fr" rowsRepeat="2, 150px">
            <Skill iconId="html" />
            <Skill iconId="css" />
            <Skill iconId="react" />
            <Skill iconId="gitIcon" viewBox="0 0 24 24" />
            <Skill iconId="sass" />
            <Skill iconId="js" />
            <Skill iconId="redux" />
            <Skill iconId="vscode" />
          </GridWrapper>
        </Container>
      </SectionSkills>
    );
}

const SectionSkills = styled.section`
    margin-bottom: 215px;
`