import styled from "styled-components"
import { Project } from "./project/Project"
import { SectionTitle } from "../../../components/section-title/SectionTitle"
import { SectionSubtitle } from "../../../components/section-subtitle/SectionSubtitle"
import { GridWrapper } from "../../../components/grid-wrapper/GridWrapper"
import { Container } from "../../../components/container/Container"

type ProjectsPropsType = {
    projectsInfo: Array<{
        imgProject: string,
        titleProject: string,
        descriptionProject: string,
        linkPreview: string,
        linkCode: string,
        techStack: string,
    }>
}

export function Projects(props: ProjectsPropsType) {

    return(
        <ProjectsStyled>
            <Container>
                <SectionTitle fontSize="48px" textAlign="center" marginBottom="50px">
                Projects
            </SectionTitle>
            <SectionSubtitle>
                 Things I've built so far
            </SectionSubtitle>
            <GridWrapper columnsRepeat="3, 1fr" columnGap="35px" rowGap="60px">
                {props.projectsInfo.map((i, index) => {
                    return (
                      <Project
                        img={i.imgProject}
                        title={i.titleProject}
                        description={i.descriptionProject}
                        linkPreview={i.linkPreview}
                        linkCode={i.linkCode}
                        techStack={i.techStack}
                        key={index}
                      />
                    );
                })}
            </GridWrapper>
            </Container>
            
        </ProjectsStyled>
    )
}

const ProjectsStyled = styled.section.attrs(() => ({
    id: "Projects"
  }))`
    padding-top: 215px;
`