import styled from "styled-components";
import { SectionTitle } from "../../../components/section-title/SectionTitle";
import { SectionSubtitle } from "../../../components/section-subtitle/SectionSubtitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/container/Container";
import { GridWrapper } from "../../../components/grid-wrapper/GridWrapper";

type SkillsPropsType = {
  skillsInfo: Array<{
    name: string,
    viewBox?: string,
  }>
}

export function Skills(props: SkillsPropsType) {

    return (
      <SectionSkills>
        <Container>
          <SectionTitle fontSize="48px" textAlign="center" marginBottom="50px ">
            My Tech Stack
          </SectionTitle>
          <SectionSubtitle>
            Technologies I’ve been working with recently
          </SectionSubtitle>
          <GridWrapper columnsRepeat="4, 120px"
                       justifyContent="space-between" 
                       rowGap="50px">
            {props.skillsInfo.map(i => {
              return(
                <Skill iconId={i.name} viewBox={i.viewBox} />
              )
            })}
          </GridWrapper>
        </Container>
      </SectionSkills>
    );
}

const SectionSkills = styled.section.attrs(() => ({
  id: "Skills"
}))`
    padding-top: 215px;
`