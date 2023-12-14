import styled from "styled-components";
import { SectionTitle } from "../../components/section-title/SectionTitle";
import { SectionSubtitle } from "../../components/section-subtitle/SectionSubtitle";
import { FlexWrapper } from "../../components/flex-wrapper/FlexWrapper";
import { Skill } from "./skill/Skill";

export function Skills() {

    return(
        <SectionSkills>
            <SectionTitle fontSize="48px">My Tech Stack</SectionTitle>
            <SectionSubtitle>Technologies I’ve been working with recently</SectionSubtitle>
            <FlexWrapper wrap="wrap">
                <Skill iconId="html"/>
                <Skill iconId="css"/>
                <Skill iconId="react"/>
                <Skill iconId="gitIcon" viewBox="0 0 24 24"/>
                <Skill iconId="sass"/>
                <Skill iconId="js"/>
                <Skill iconId="redux"/>
                <Skill iconId="vscode"/>
            </FlexWrapper>
        </SectionSkills>

    )
}

const SectionSkills = styled.section`
    
`